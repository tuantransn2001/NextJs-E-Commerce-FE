/* eslint-disable import/extensions */
import MyButton from '../helpers/myButton';
import Image from 'next/image';
import {
  viewStoreIcon,
  searchIcon,
  authIcon,
  cartIcon,
} from '@/components/svgIcon';
import lenleys_main_logo from '../../assets/img/logo/lenleys_main_logo.png';
import classNames from 'classnames/bind';
import { BUTTON_TYPE, HREF } from '@/ts/enums/common';
const cx = classNames.bind(require('./style/Header.module.scss'));

const storeLocationBtnContentStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '.8rem',
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#272525',
};

const headingTitleStyle = {
  fontSize: '1.1rem',
  fontWeight: '500',
  color: '#ffffff',
};

export default function Header({}) {
  return (
    <header id={cx('header')} className={cx('bg-wrapper')}>
      <div className={`${cx('widget-elementor-bg')}`}>
        <MyButton transparent type={BUTTON_TYPE.primary}>
          <span style={headingTitleStyle}>
            ACCESSORIES AVAILABLE FOR NATIONWIDE DELIVERY
          </span>
        </MyButton>
      </div>
      <div className="grid wide">
        <div className={cx('header')}>
          <div className="row mb-2">
            <div className="c-3 gutter flex-item-horizontal-start gap-1">
              <MyButton href={HREF.auth} transparent type={BUTTON_TYPE.primary}>
                {authIcon}
              </MyButton>

              <MyButton href={HREF.info} transparent type={BUTTON_TYPE.primary}>
                <span style={storeLocationBtnContentStyle}>
                  {viewStoreIcon} OUR STORES
                </span>
              </MyButton>
            </div>
            <div className="c-6 gutter flex-center">
              <MyButton href={HREF.home} transparent type={BUTTON_TYPE.primary}>
                <Image
                  src={lenleys_main_logo}
                  alt="Main Logo"
                  width={136}
                  height={80}
                  className={cx('logo-img')}
                />
              </MyButton>
            </div>
            <div className="c-3 gutter flex-item-horizontal-end gap-1">
              <MyButton transparent type={BUTTON_TYPE.primary}>
                {searchIcon}
              </MyButton>
              <MyButton href={HREF.cart} transparent type={BUTTON_TYPE.primary}>
                {cartIcon}
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
