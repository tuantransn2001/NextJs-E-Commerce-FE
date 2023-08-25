import { isEmpty } from '@/common';
import moment from 'moment';

import { Falsy, ObjectType } from '../types/common';
import { User } from '../types/user.type';

export const handleCheckTwoSameUsers = (
  targetUser: User,
  compareUser: User,
) => {
  return targetUser.id === compareUser.id;
};

export const isUserListValidToRender = (data: any[] | Falsy) => {
  return data === null || undefined ? false : !isEmpty(data as any[]);
};

export const isSingleChat = (member: User[]) => member.length <= 2;

export const isRightReceiver = (
  members: User[] | Falsy,
  currentUser: User | Falsy,
) => {
  if (!currentUser || !members) return false;
  const isCurrentUserLoginExistInConversation = (m: User) =>
    handleCheckTwoSameUsers(m, currentUser as User);

  return members.findIndex(isCurrentUserLoginExistInConversation) !== -1;
};

export const handleConvertDate = (date: Date | string) =>
  moment(date).format('LT');

export const handleFindContactUserFromMembers = (
  members: User[] | Falsy,
  currentUserLogin: User | Falsy,
) => {
  if (!currentUserLogin || !members) return false;
  const isNotSender = (compareUser: User) =>
    !handleCheckTwoSameUsers(compareUser, currentUserLogin);
  const foundUser = members.find(isNotSender);

  return foundUser ? foundUser : undefined;
};
