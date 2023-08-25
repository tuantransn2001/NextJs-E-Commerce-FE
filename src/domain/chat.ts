import { Message, UserContactItem } from '@/ts/types/chat.type';
import { SetValue } from '@/ts/types/common';
import { User } from '@/ts/types/user.type';

export interface GetContactListPayload {
  id: string;
  type: string;
}

export interface SearchUserByNamePayload {
  contentSearch: string;
}

export interface GetAllMessageByConversationIDPayload {
  id: string;
}

export interface SendMessagePayload {
  conversationID?: string;
  members: User[];
  message: Message;
}

export interface RequestContactListPayload {
  id: string;
}

export interface RequestConversationMessagesPayload {
  id: string;
  members?: User[];
}

export interface ReceiveMessagePayload {
  currentUser: User;
  setUserContactInfo: SetValue<User>;
  setRoomID: SetValue<string>;
  setMessages: SetValue<Message[]>;
  setCurrentUser: SetValue<User>;
  setUserContactList: SetValue<UserContactItem[]>;
}

export interface ReceiveContactListPayload {
  setUserContactList: SetValue<UserContactItem[]>;
}

export interface HandleJoinRoomPayload {
  conversationID: string;
  userContactInfo: User;
  messages: Message[];
}
