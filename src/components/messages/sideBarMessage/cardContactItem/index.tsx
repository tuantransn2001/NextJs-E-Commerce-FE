import { LastMessage } from '@/ts/types/chat.type';
import { User } from '@/ts/types/user.type';
import { handleConvertDate } from '@/ts/utils/chatLogics';
import classNames from 'classnames/bind';
import Image from 'next/image';
const cx = classNames.bind(require('./style/CardContactItem.module.scss'));
import React from 'react';

interface CartContactItemProps {
  user: User;
  lastMessage?: LastMessage;
  onClick: () => void;
}

const CartContactItem = ({
  user,
  lastMessage,
  onClick,
}: CartContactItemProps) => {
  return (
    <div className={cx('friend-drawer-wrapper')} onClick={onClick}>
      <div className={cx('friend-drawer')}>
        <Image
          width={50}
          height={50}
          className={cx('profile-image')}
          src={user.avatar as string}
          alt={user.firstName}
        />
        <div className={cx('text')}>
          <h6>{user.firstName}</h6>
          <p className={cx('text-muted')}>{lastMessage?.content}</p>
        </div>
        {lastMessage?.timeMessage && (
          <span className={cx('time')}>
            {handleConvertDate(lastMessage?.timeMessage as Date)}
          </span>
        )}
      </div>
      <hr className={cx('chat-hr')} />
    </div>
  );
};
export default CartContactItem;
