/* eslint-disable import/extensions */
import Image from 'next/image';
import React from 'react';
import CategoryQuickView from './CategoryQuickView';
import CategoryView from './CategoryView';
import ServiceReview from './ServiceReview';
import ShopAddress from './ShopAddress';
import ProductDelivery from './ProductDelivery';
import AboutShop from './AboutShop';
import ShopInstagram from './ShopInstagram';
import banner from '../../assets/img/homePage/banner/banner.png';
import { useTitle } from '@/customizes/hooks';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/Home.module.scss'));

const HomePage = ({}) => {
  useTitle('Luxury Sofas, Beds & Furniture Canterbury - Lenleys');

  return (
    <>
      <div className={cx('wrapper')}>
        <Image
          src={banner}
          alt="banner"
          className={cx('img')}
          width={40}
          height={40}
        />
      </div>
      <CategoryQuickView />
      <CategoryView />
      <ServiceReview />
      <ShopAddress />
      <ProductDelivery />
      <AboutShop />
      <ShopInstagram />
    </>
  );
};

export default HomePage;
