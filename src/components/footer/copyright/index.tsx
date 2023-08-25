/* eslint-disable import/extensions */
import copyright from '../../../assets/img/footer/copyright/copyright.png';
import classNames from 'classnames/bind';
import { copyRight } from '@/data/footer';
import Image from 'next/image';
const cx = classNames.bind(require('./style/Copyright.module.scss'));

const renderPrivatePolicy = () => {
  return copyRight.policy.map((content, index) => {
    return (
      <li className={cx('private-policy-item')} key={index}>
        <span className={cx('private-policy-item-link')}>{content}</span>
      </li>
    );
  });
};
const renderSocialIconLink = () => {
  return copyRight.socialIcons.map((icon_src, index) => {
    return (
      <li className={cx('social-icon-item')} key={index}>
        <div className={`${cx('social-icon-link-wrapper')} flex-center`}>
<<<<<<< HEAD
          <Image src={icon_src} alt="Facebook" className={cx('social-icon')} />
=======
          <Image
            src={icon_src}
            alt="Facebook"
            className={cx('social-icon')}
            width={40}
            height={40}
          />
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
        </div>
      </li>
    );
  });
};
const Copyright = ({}) => {
  return (
    <div className={cx('container')}>
      <div className="grid wide">
        <div className="row x-center">
          <div className="c-3 gutter flex-item-horizontal-start">
            <ul className={cx('private-policy-list')}>
              {renderPrivatePolicy()}
            </ul>
          </div>
          <div className="c-6 gutter flex-center">
            <div className={cx('content-wrapper')}>
              <p className={cx('content')}>
                © 2022 Lenleys. All Rights Reserved.
              </p>
              <div className={cx('img-link-wrapper')}>
                <Image src={copyright} alt="Copy right" className={cx('img')} />
              </div>
            </div>
          </div>
          <div className="c-3 gutter flex-horizontal-flex-end">
            <ul className={cx('social-icon-list')}>{renderSocialIconLink()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
