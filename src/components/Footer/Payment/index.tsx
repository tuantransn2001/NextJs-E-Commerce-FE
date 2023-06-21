import payments from '@/assets/img/footer/payments/payments.png';
import classNames from 'classnames/bind';
import Image from 'next/image';
const cx = classNames.bind(require('./style/Payment.module.scss'));
export default function Payment({}) {
  return (
    <div className={cx('container')}>
      <div className="grid wide">
        <div className="row">
          <div className="c-12 gutter flex-center">
            <div className={cx('img-link-wrapper')}>
              <Image src={payments} alt="Payments" className={cx('img')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
