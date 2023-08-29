import MyButton from '@/components/helpers/myButton';
import { BUTTON_SIZE, BUTTON_TYPE } from '@/ts/enums/common';
import classNames from 'classnames/bind';

const cx = classNames.bind(require('./style/Subscribe.module.scss'));

export default function Subscribe({}) {
  return (
    <div className={cx('container')}>
      <div className="grid wide">
        <div className="row">
          <div className="c-12 gutter flex-center">
            <div className={cx('input-wrapper')}>
              <h1 className={cx('input-content')}>
                SIGN UP FOR OFFERS AND NEWS
              </h1>
              <div className={cx('input-bar')}>
                <input
                  type="text"
                  className={cx('input')}
                  placeholder="Enter your mail"
                />
                <MyButton type={BUTTON_TYPE.primary} size={BUTTON_SIZE.lg}>
                  Subscribe
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
