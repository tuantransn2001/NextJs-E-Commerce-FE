import { createContext, useContext, useEffect, useState } from 'react';

import { WebSocketServices } from '@/services/websocket.service';

import {
  Message,
  SocketContextAttributes,
  UserContactItem,
} from '@/ts/types/chat.type';
import { SetValue } from '@/ts/types/common';
import {
  ReceiveContactListPayload,
  ReceiveMessagePayload,
} from '@/domain/chat';
import { env } from '@/constants/env';
import { useSelector } from 'react-redux';
import { userSelector } from '@/redux/slice/auth.slice';
import { User } from '@/ts/types/user.type';
interface SocketProviderProps {
  children: JSX.Element | JSX.Element[];
}

const SocketContext = createContext<SocketContextAttributes>({});

const useSetupOnUserLogin = (
  socket: any,
  currentUser: User | null,
  setCurrentUser: SetValue<User | null>,
  setUserContactList: SetValue<UserContactItem[] | null>,
) => {
  const currentUserLogin = useSelector(userSelector);

  useEffect(() => {
    if (currentUserLogin) {
      setCurrentUser({ ...currentUserLogin });
      if (socket) {
        WebSocketServices.handleClientRequestContactList(socket, {
          id: currentUserLogin.id,
        });
        const receiveContactListData: ReceiveContactListPayload = {
          setUserContactList: setUserContactList as SetValue<UserContactItem[]>,
        };
        WebSocketServices.handleClientOnReceiveContactList(
          socket,
          receiveContactListData,
        );
      }
    }
  }, [currentUser, socket]);
};

const SocketsProvider = ({ children }: SocketProviderProps) => {
  const [Socket, setSocket] = useState<any>();
  const [roomID, setRoomID] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [userContactList, setUserContactList] = useState<
    UserContactItem[] | null
  >(null);

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userContactInfo, setUserContactInfo] = useState<User | null>(null);
  const currentUserLogin = useSelector(userSelector);

  if (Socket) {
    WebSocketServices.handleOnConnect(Socket);
    const receiveMessageData: ReceiveMessagePayload = {
      currentUser: currentUser as User,
      setUserContactInfo: setUserContactInfo as SetValue<User>,
      setCurrentUser: setCurrentUser as SetValue<User>,
      setMessages: setMessages as SetValue<Message[]>,
      setRoomID: setRoomID as SetValue<string>,
      setUserContactList: setUserContactList as SetValue<UserContactItem[]>,
    };
    WebSocketServices.handleClientOnReceiveMessage(Socket, receiveMessageData);
  } else {
    WebSocketServices.handleBeforeConnect();
  }

  useSetupOnUserLogin(
    Socket,
    currentUserLogin,
    setCurrentUser,
    setUserContactList,
  );

  useEffect(() => {
    WebSocketServices.initiate(setSocket);
  }, [env.server_base_url]);

  return (
    <SocketContext.Provider
      value={{
        Socket,
        roomID,
        setRoomID,
        userContactInfo,
        messages,
        setMessages,
        setUserContactInfo,
        userContactList,
        setUserContactList,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
export const useSocket = () => useContext(SocketContext);

export default SocketsProvider;
