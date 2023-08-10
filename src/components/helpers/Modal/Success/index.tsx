/* eslint-disable import/extensions */
import { BUTTON_TYPE } from '@/ts/enums/common';
import { ObjectType } from '@/ts/types/common';
import MyButton from '../../MyButton';
import './style/Success.scss';

interface ModalSuccessProps {
  type: string;
  message?: string;
  nextActionContent?: string;
  handleOnSwitchNextAction: () => void;
  handleOnClose: () => void;
}

const COLOR: ObjectType = {
  success: '#47c9a2',
  fail: '#ff6677',
};

const ModalSuccess = ({
  type,
  message,
  nextActionContent,
  handleOnClose,
  handleOnSwitchNextAction,
}: ModalSuccessProps) => {
  return (
    <div className="myModal">
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div
            style={{ background: COLOR[type] }}
            className="modal-header justify-content-center"
          >
            <div className="icon-box">
              <i className="material-icons"></i>
            </div>
            <MyButton
              type={BUTTON_TYPE.primary}
              className="close"
              data-dismiss="modal"
              aria-hidden="true"
              onClick={handleOnClose}
            >
              ×
            </MyButton>
          </div>
          <div className="modal-body text-center">
            <h4>{type === 'success' ? 'Great' : 'Ooops'}!</h4>
            <p>
              {message
                ? message
                : `Your account has been created successfully.`}
            </p>
            <MyButton
              type={BUTTON_TYPE.primary}
              className="btn btn-success"
              data-dismiss="modal"
              onClick={handleOnSwitchNextAction}
            >
              <span>
                {nextActionContent ? nextActionContent : `Start Exploring`}
              </span>{' '}
              <i className="material-icons"></i>
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccess;
