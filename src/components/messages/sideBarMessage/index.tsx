import { isEmpty } from '@/common';
import { useSocket } from '@/context/socketContext';
import { ChatServices } from '@/services/chat.service';
import { WebSocketServices } from '@/services/websocket.service';
import { PaginationDTO } from '@/ts/dto/common.dto';
import { RESPONSE_STATUS } from '@/ts/enums/api_enums';
import { Message, UserContactItem } from '@/ts/types/chat.type';
import { ResponseAttributes, SetValue } from '@/ts/types/common';
import { User } from '@/ts/types/user.type';
import { handleFindContactUserFromMembers } from '@/ts/utils/chatLogics';

import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import classNames from 'classnames/bind';
import CartContactItem from './cardContactItem';
import Image from 'next/image';
import { array } from 'joi';
import { setCurrentUser } from '@/redux/slice/auth.slice';
const cx = classNames.bind(require('./style/SideBarMessage.module.scss'));

type FormValues = {
  name: string;
};

const SideBarMessage = () => {
  const socket = useSocket().Socket as any;
  const roomID = useSocket().roomID as string;
  const currentUser = useSocket().currentUser as User;
  const userContactList = useSocket().userContactList as UserContactItem[];
  const setUserContactInfo = useSocket().setUserContactInfo as SetValue<User>;
  const setRoomID = useSocket().setRoomID as SetValue<string>;
  const setMessages = useSocket().setMessages as SetValue<Message[]>;

  const { register, resetField, reset, handleSubmit } = useForm<FormValues>();

  const [searchListUser, setSearchListUser] = useState<User[]>([]);

  const handleResetAfterSearch = () => {
    resetField('name');
    reset();
    setSearchListUser(new Array());
  };

  const onSubmit: SubmitHandler<FormValues> = useCallback(async ({ name }) => {
    const searchUserData: PaginationDTO = {
      page_number: 1,
      page_size: 5,
      objSearchParam: { name },
    };

    const { status, data } = (await ChatServices.handleSearchUser(
      searchUserData,
    )) as ResponseAttributes;

    if (status === RESPONSE_STATUS.SUCCESS) {
      setSearchListUser([...data.data]);
    }
    if (status === RESPONSE_STATUS.FAIL) {
      setSearchListUser([]);
    }
  }, []);

  return (
    <div className={cx('sidebar-wrapper')}>
      <div className={cx('settings-tray')}>
        <Image
          width={50}
          height={50}
          className={cx('profile-image')}
          src={currentUser?.avatar}
          alt="Profile img"
        />
        <span className={cx('settings-tray--right')}>
          <i className={cx('material-icons')}>cached</i>
          <i className={cx('material-icons')}>message</i>
          <i className={cx('material-icons')}>menu</i>
        </span>
      </div>
      <form className={cx('search-box')} onSubmit={handleSubmit(onSubmit)}>
        <i className={cx('material-icons')}>search</i>
        <input
          {...register('name')}
          className={cx('chat-input')}
          placeholder="Search here"
          type="text"
        />{' '}
        <div className={cx('search-list-user-wrapper')}>
          {!isEmpty(searchListUser) &&
            searchListUser.map((user, index) => (
              <CartContactItem
                user={user}
                key={index}
                onClick={() => {
                  ChatServices.handleAddToChat(
                    socket,
                    '',
                    currentUser,
                    user,
                    setUserContactInfo,
                    setRoomID,
                    setMessages,
                  );
                  handleResetAfterSearch();
                }}
              />
            ))}
        </div>
      </form>

      {userContactList?.map((contactItem, index) => {
        const userContactInfo = handleFindContactUserFromMembers(
          contactItem.members,
          currentUser,
        ) as User;

        return (
          <CartContactItem
            key={index}
            user={userContactInfo}
            lastMessage={contactItem.lastMessage}
            onClick={() => {
              ChatServices.handleAddToChat(
                socket,
                contactItem.conversationID,
                currentUser,
                userContactInfo,
                setUserContactInfo,
                setRoomID,
                setMessages,
              );
            }}
          />
        );
      })}
    </div>
  );
};

export default SideBarMessage;
