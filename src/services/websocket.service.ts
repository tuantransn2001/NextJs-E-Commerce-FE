import { EVENTS } from '@/constants/common';
import { env } from '@/constants/env';
import {
  ReceiveContactListPayload,
  ReceiveMessagePayload,
  RequestContactListPayload,
  RequestConversationMessagesPayload,
  SendMessagePayload,
} from '@/domain/chat';
import { STATUS_CODE } from '@/ts/enums/api_enums';
import {
  Message,
  ReceivedRoomMessageResponse,
  SocketEmitResponse,
  UserContactItem,
} from '@/ts/types/chat.type';
import { SetValue } from '@/ts/types/common';
import { User } from '@/ts/types/user.type';
import {
  handleFindContactUserFromMembers,
  isRightReceiver,
} from '@/ts/utils/chatLogics';
import io from 'socket.io-client';

export class WebSocketServices {
  public static initiate(setSocket: SetValue<any>) {
    const socket = io(env.server_base_url);
    setSocket(socket);
  }

  public static handleOnConnect(socket: any) {
    return socket.on(EVENTS.connect, function () {
      console.log('Socket has been connected');
    });
  }

  public static handleBeforeConnect() {
    return console.warn('Socket is connecting...');
  }

  public static handleClientSendMessage(
    socket: any,
    payload: SendMessagePayload,
  ) {
    return socket.emit(EVENTS.CLIENT.SEND_ROOM_MESSAGE, payload);
  }

  public static handleClientRequestContactList(
    socket: any,
    payload: RequestContactListPayload,
  ) {
    return socket.emit(EVENTS.CLIENT.REQUEST_CONTACT_LIST, payload);
  }

  public static handleClientOnReceiveContactList(
    socket: any,
    payload: ReceiveContactListPayload,
  ) {
    return socket.on(
      EVENTS.SERVER.RECEIVED_CONTACT_LIST,
      (response: SocketEmitResponse<UserContactItem[]>) =>
        payload.setUserContactList([...response.data]),
    );
  }

  public static handleClientOnReceiveMessage(
    socket: any,
    payload: ReceiveMessagePayload,
  ) {
    return socket.on(
      EVENTS.SERVER.RECEIVED_ROOM_MESSAGE,
      (response: SocketEmitResponse<ReceivedRoomMessageResponse>) => {
        if (isRightReceiver(response.data?.members, payload.currentUser)) {
          const updateUserContactInfoData = {
            ...handleFindContactUserFromMembers(
              response.data.members,
              payload.currentUser,
            ),
          } as User;
          const updateMessagesData = [...(response.data.messages as Message[])];
          const updateCurrentUser = { ...payload.currentUser } as User;
          const updateConversationID = response.data.conversationID;

          payload.setUserContactInfo(updateUserContactInfoData);
          payload.setMessages(updateMessagesData);
          payload.setRoomID(updateConversationID);
          payload.setCurrentUser(updateCurrentUser);

          WebSocketServices.handleClientRequestContactList(socket, {
            id: updateCurrentUser.id,
          });
          const receiveContactListData: ReceiveContactListPayload = {
            setUserContactList: payload.setUserContactList as SetValue<
              UserContactItem[]
            >,
          };
          WebSocketServices.handleClientOnReceiveContactList(
            socket,
            receiveContactListData,
          );
        }
      },
    );
  }

  public static handleRequestConversationMessage(
    socket: any,
    payload: RequestConversationMessagesPayload,
  ) {
    return socket.emit(EVENTS.CLIENT.REQUEST_ROOM_MESSAGE, payload);
  }
  public static handleClientOnReceiveConversationMessage(
    socket: any,
    currentUser: User,
    userContactInfo: User,
    setUserContactInfo: SetValue<User>,
    setRoomID: SetValue<string>,
    setMessages: SetValue<Message[]>,
  ) {
    return socket.on(
      EVENTS.SERVER.RECEIVED_ROOM_MESSAGE,
      (response: SocketEmitResponse<UserContactItem>) => {
        switch (response.statusCode) {
          case STATUS_CODE.STATUS_CODE_200: {
            const { conversationID, messages, members } = response.data;

            const userContactInfo = handleFindContactUserFromMembers(
              members,
              currentUser,
            ) as User;
            setUserContactInfo({ ...userContactInfo });
            setRoomID(conversationID);
            setMessages([...(messages as Message[])]);
            break;
          }
          case STATUS_CODE.STATUS_CODE_404: {
            setUserContactInfo({ ...userContactInfo });
            setRoomID('');
            setMessages(new Array());
            break;
          }
          default: {
            return;
          }
        }
      },
    );
  }
}
