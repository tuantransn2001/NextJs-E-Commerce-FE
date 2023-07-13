/* eslint-disable import/extensions */
import Image from 'next/image';
import { bannerImgSrc } from '@/data/shopInformation';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/Banner.module.scss'));

const renderInfoImg = () => {
  return bannerImgSrc.map((imgSrc, index) => {
    return (
      <li className={cx('infor-banner-img-item')} key={index}>
        <div className={cx('infor-banner-img-link')}>
          <Image src={imgSrc} alt="Banner" width={100} height={100} />
        </div>
      </li>
    );
  });
};

export default function Banner({}) {
  return (
    <div className={`${cx('infor-banner-wrapper')} page-section-boder-bottom`}>
      <ul className={cx('infor-banner-img-list')}>{renderInfoImg()}</ul>
      <h3 className="h3-size-default text-center">
        AT LENLEYS HOME, YOU CAN FIND EVERYTHING YOU NEED TO CREATE THE HOME YOU
        HAVE ALWAYS WANTED, THE HOME YOU DESERVE.
      </h3>
    </div>
  );
}
