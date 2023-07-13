/* eslint-disable import/extensions */
import SwiperCarousel from '@/components/helpers/SwipperCarousel';
import Brand from './Brand';

import classNames from 'classnames/bind';
import { brandsImgSrc } from '@/data/brands';

const cx = classNames.bind(require('./style/Brands.module.scss'));

const brandImgEls = () => {
  return brandsImgSrc.map((imgSrc, index) => (
    <Brand imgSrc={imgSrc} key={index} />
  ));
};

export const Brands = ({}) => {
  return (
    <div className={cx('category-brands-wrapper')}>
      <div className={`${cx('category-brands')} grid wide`}>
        <div className="row">
          <div className="c-12 gutter flex-center">
            <h3 className="h3-size-default">Brands with lenleys</h3>
          </div>
        </div>
        <div className="row">
          <div className="c-12 gutter">
            <SwiperCarousel
              slidesPerView={5}
              spaceBetween={30}
              slidesPerGroup={1}
              isLoop
              swiperSlidesData={brandImgEls()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
