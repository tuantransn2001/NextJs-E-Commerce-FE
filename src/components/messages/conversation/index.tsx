import { isEmpty } from '@/common';
import MyButton from '@/components/helpers/myButton';
import { useSocket } from '@/context/socketContext';
import { SendMessagePayload } from '@/domain/chat';
import { WebSocketServices } from '@/services/websocket.service';
import { BUTTON_TYPE } from '@/ts/enums/common';
import { Message } from '@/ts/types/chat.type';
import { User } from '@/ts/types/user.type';
import {
  handleCheckTwoSameUsers,
  handleConvertDate,
  handleFindContactUserFromMembers,
} from '@/ts/utils/chatLogics';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import CardConversation from './cardConversation';
import classNames from 'classnames/bind';
import Image from 'next/image';
const cx = classNames.bind(require('./style/Conversation.module.scss'));
type FormValues = {
  message: string;
};

interface ConversationProps {
  handleToggleChatBox: () => void;
}
const Conversation = ({ handleToggleChatBox }: ConversationProps) => {
  const socket = useSocket().Socket as any;
  const roomID = useSocket().roomID as string;
  const currentUser = useSocket().currentUser as User;
  const userContactInfo = useSocket().userContactInfo as User;
  const messages = useSocket().messages as Message[];

  const { register, handleSubmit, reset, setFocus } = useForm<FormValues>();

  const handleResetAfterSendMessage = () => {
    setFocus('message');
    reset();
  };

  const handleSendMessage = ({ message }: FormValues) => {
    if (!message) return;
    const data: SendMessagePayload = {
      conversationID: roomID,
      members: [currentUser, userContactInfo],
      message: {
        content: message,
        sender: currentUser,
      },
    };

    WebSocketServices.handleClientSendMessage(socket, data);
    handleResetAfterSendMessage();
  };

  return (
    <div>
      <div className={cx('settings-tray')}>
        {userContactInfo ? (
          <div className={cx('friend-drawer')}>
            <Image
              width={50}
              height={50}
              className={cx('profile-image')}
              src={userContactInfo?.avatar}
              alt={userContactInfo?.firstName}
            />
            <div className={cx('text')}>
              <h6 className="paragraph-text-style-strong">
                {userContactInfo?.firstName}
              </h6>
              <p className={cx('text-muted') + 'paragraph-text-style'}>
                Layin' down the law since like before Christ...
              </p>
            </div>
          </div>
        ) : (
          <div />
        )}
        <MyButton
          onClick={handleToggleChatBox}
          transparent
          type={BUTTON_TYPE.primary}
          className={cx('hide-chat-btn')}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </MyButton>
      </div>
      <div className={cx('chat-panel')}>
        <div className={cx('messages-chat-wrapper')}>
          {!isEmpty(messages) &&
            messages.map((message, index) => {
              const isSameSender =
                message.sender.id === messages[index - 1]?.sender.id;

              return (
                <CardConversation
                  isSameSender={isSameSender}
                  isSender={handleCheckTwoSameUsers(
                    message.sender,
                    currentUser,
                  )}
                  message={message.content}
                  timeMessage={handleConvertDate(message.updatedAt as Date)}
                  key={index}
                />
              );
            })}
        </div>
        <form
          className={cx('chat-box-tray')}
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <i className={cx('material-icons')}>sentiment_very_satisfied</i>
          <input
            {...register('message')}
            className={cx('chat-input')}
            type="text"
            placeholder="Type your message here..."
            onKeyDown={(e) =>
              e.key === 'Enter' && handleSubmit(handleSendMessage)
            }
          />
          <i className={cx('material-icons')}>mic</i>
          <i className={cx('material-icons')}>send</i>
        </form>
      </div>
    </div>
  );
};

export default Conversation;
