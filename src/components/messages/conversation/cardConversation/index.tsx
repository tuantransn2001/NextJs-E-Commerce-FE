import { User } from '@/ts/types/user.type';
import { Avatar } from '@chakra-ui/react';
import { useSocket } from '@/context/socketContext';
import Image from 'next/image';
import React from 'react';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/cardConversation.module.scss'));
type CardConversationProps = {
  message?: any;
  isSameSender?: boolean;
  isSender?: boolean;
  isLastMessage?: boolean;
  timeMessage?: string;
};

function CardConversation({
  isSender,
  message,
  timeMessage,
  isSameSender,
}: CardConversationProps) {
  const userContactInfo = useSocket().userContactInfo as User;
  const isOkRenderAvatar = !isSender;
  return (
    <div className={cx('messages-chat', { 'text-only': isSender })}>
      {isOkRenderAvatar && (
        <Image
          className={cx('photo')}
          src={userContactInfo.avatar as string}
          alt={userContactInfo.firstName}
          width={20}
          height={20}
        />
      )}
      <div className={cx('message')}>
        <p className={cx('text')}>{message}</p>
        {<p className={cx('time')}> {timeMessage}</p>}
      </div>
    </div>
  );
}

export default CardConversation;
