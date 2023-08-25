import type { SetValue } from './common';
import { User } from './user.type';

/* eslint-disable @typescript-eslint/ban-types */

export type Message = {
  id?: string;
  sender: User;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type LastMessage = {
  content: string;
  timeMessage: Date | string;
};

export type UserContactItem = {
  conversationID: string;
  name: string;
  lastMessage: LastMessage;
  messages?: Message[];
  members: User[];
  createdAt: Date;
  updatedAt: Date;
};

export type ReceivedRoomMessageResponse = Omit<
  UserContactItem,
  'name' | 'createdAt' | 'updatedAt' | 'lastMessage'
>;

export type SocketEmitResponse<ResDataType> = {
  statusCode: number;
  message: string;
  data: ResDataType;
};

export type SocketContextAttributes = {
  Socket?: any;
  messages?: Message[];
  setMessages?: SetValue<Message[]>;
  userContactInfo?: User | null;
  setUserContactInfo?: SetValue<User | null>;
  isOnline?: boolean;
  setIsOnline?: SetValue<boolean>;
  roomID?: string;
  setRoomID?: SetValue<string>;
  userContactList?: UserContactItem[] | null;
  setUserContactList?: SetValue<UserContactItem[] | null>;
  currentUser?: User | null;
  setCurrentUser?: SetValue<User | null>;
};
