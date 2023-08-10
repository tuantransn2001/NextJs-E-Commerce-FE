/* eslint-disable import/extensions */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import MyButton from '@/components/helpers/MyButton';
import { authSuccessStatusContent } from '@/data/auth';
import { BUTTON_SIZE, BUTTON_TYPE } from '@/ts/enums/common';
const cx = classNames.bind(require('./style/AuthPageSuccess.module.scss'));

interface AuthPageSuccessProps {
  formType: string;
}

export default function AuthPageSuccess({ formType }: AuthPageSuccessProps) {
  return (
    <div className={cx('auth-page-success-wrapper')}>
      <div className={cx('auth-page-success')}>
        <div className={`${cx('auth-page-icon-wrapper')} flex-center`}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <h1 className={cx('auth-page-success-title')}>
          {/* THANK YOU FOR YOUR SUBSCRIPTION. */}
          {authSuccessStatusContent[formType].title}
        </h1>
        <span className={cx('auth-page-success-subtitle')}>
          {authSuccessStatusContent[formType].content}
        </span>
        <div className={cx('direction-btns')}>
          <MyButton size={BUTTON_SIZE.md} maxWidth type={BUTTON_TYPE.primary}>
            {authSuccessStatusContent[formType].directionBtnContent[0]}
          </MyButton>
          <MyButton size={BUTTON_SIZE.md} maxWidth type={BUTTON_TYPE.primary}>
            {authSuccessStatusContent[formType].directionBtnContent[1]}
          </MyButton>
        </div>
      </div>
    </div>
  );
}
