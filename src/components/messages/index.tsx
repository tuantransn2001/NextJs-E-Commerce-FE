/* eslint-disable import/extensions */
import SocketsProvider from '@/context/socketContext';
import React, { useState } from 'react';
import Conversation from './conversation';
import SideBarMessage from './sideBarMessage';
import classNames from 'classnames/bind';
import MyButton from '../helpers/myButton';
import { BUTTON_TYPE } from '@/ts/enums/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(require('./style/Messages.module.scss'));

interface MessagesProps {}

const Messages = ({}: MessagesProps) => {
  const [isHideChatBox, setIsHideChatBox] = useState<boolean>(true);
  const handleToggleChatBox = () => setIsHideChatBox(!isHideChatBox);
  return (
    <SocketsProvider>
      {isHideChatBox ? (
        <div className={cx('show-chatBox-btn-wrapper')}>
          <MyButton
            onClick={handleToggleChatBox}
            type={BUTTON_TYPE.primary}
            maxWidth
            className={cx('show-chatBox-btn')}
          >
            <FontAwesomeIcon icon={faMessage} />
          </MyButton>
        </div>
      ) : (
        <div className={cx('container')}>
          <div className="grid">
            <div className="row no-gutter">
              <div className="c-4 mt-gutter">
                <SideBarMessage />
              </div>
              <div className="c-8 mt-gutter">
                <Conversation handleToggleChatBox={handleToggleChatBox} />
              </div>
            </div>
          </div>
        </div>
      )}
    </SocketsProvider>
  );
};

export default Messages;
