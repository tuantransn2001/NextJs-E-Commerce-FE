import { PaginationDTO } from '@/ts/dto/common.dto';
import { Message } from '@/ts/types/chat.type';
import { ObjectType, SetValue } from '@/ts/types/common';
import { User } from '@/ts/types/user.type';
import APIRequest from '@/ts/utils/apiRequest';
import { _ } from '@/common';
import { API_PATH, RESPONSE_STATUS } from '@/ts/enums/api_enums';
import URLSearchParam from '@/ts/utils/urlSearchParam';
import Response from '@/ts/utils/apiResponse';
import { RequestConversationMessagesPayload } from '@/domain/chat';
import { WebSocketServices } from './websocket.service';
export class ChatServices {
  public static async handleSearchUser(payload: PaginationDTO) {
    const searchQuery = `?page_number=${payload.page_number}&page_size=${
      payload.page_size
    }&${URLSearchParam.objToUrlParams(payload.objSearchParam as ObjectType)}`;

    const result = await APIRequest.createInstance(_).get(
      API_PATH.searchUser + searchQuery,
    );

    if (result.data.statusCode === 200) {
      return Response.onSuccess(RESPONSE_STATUS.SUCCESS, result.data.data);
    } else {
      return Response.onFail(RESPONSE_STATUS.FAIL);
    }
  }

  public static async handleAddToChat(
    socket: any,
    conversationID: string | undefined,
    currentUser: User,
    userContactInfo: User,
    setUserContactInfo: SetValue<User>,
    setRoomID: SetValue<string>,
    setMessages: SetValue<Message[]>,
  ) {
    const data: RequestConversationMessagesPayload = {
      id: conversationID as string,
      members: new Array(...[currentUser, userContactInfo]),
    };

    WebSocketServices.handleRequestConversationMessage(socket, data);
    WebSocketServices.handleClientOnReceiveConversationMessage(
      socket,
      currentUser,
      userContactInfo,
      setUserContactInfo,
      setRoomID,
      setMessages,
    );
  }
}
