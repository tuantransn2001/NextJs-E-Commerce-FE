/* eslint-disable import/extensions */
import React from 'react';
import vvs_archive_product_logo from '../../../assets/img/homePage/aboutShop/vvs_archive_product_logo.png';
import MyButton from '@/components/helpers/MyButton';
import Section from '@/components/helpers/Section';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { BUTTON_SIZE, BUTTON_TYPE } from '@/ts/enums/common';
const cx = classNames.bind(require('./style/AboutShop.module.scss'));

export default function AboutShop({}) {
  return (
    <Section
      title={'LUXURY SOFAS, BEDS & FURNITURE IN KENT'}
      borderOptions={{
        direction: 'bottom',
      }}
    >
      <div className={`${cx('about-shop')} grid about-shop-block-wide`}>
        <div className="row">
          <div className="c-12 gutter">
            <div className={cx('about-shop-content-wrapper')}>
              <p className={cx('about-shop-desc-strong')}>
                Lenleys Home is a Kent-based furniture retailer, bringing
                quality products from some of the world’s leading designers and
                craftsmen straight to you including Collins &#38; Hayes, Parker
                Knoll, Orla Kiely, Alexander &#38; James, Venjakob, ercol,
                Cattelan Italia, Sanderson, Luxaflex, Karndean, Crucial Trading
                and many more.
              </p>
              <p className={cx('about-shop-desc')}>
                Run by three generations of the Watts family since 1936, our
                brand combines exceptional service and design expertise to give
                you a shopping experience you won’t find on the high street.
              </p>
              <p className={cx('about-shop-desc')}>
                Visit our beautiful showrooms in Canterbury &#38; Maidstone to
                experience our luxurious sofas, beds and bedroom furniture,
                dining sets, and home accessories.
              </p>
              <p className={cx('about-shop-desc')}>
                In our Canterbury store you will find our two specialist
                departments:
              </p>
              <p className={cx('about-shop-desc')}>
                The Interiors Style Studio offers fabrics, wallpapers, blinds
                &#38; awnings from and extensive range of designers and
                manufacturers. Our expert staff are on hand to offer advice on
                bespoke curtains and curtains as well as details of our Interior
                Design Service.
              </p>
              <p className={cx('about-shop-desc')}>
                The Flooring Design Studio showcases the very best in luxury
                carpets, hard flooring &#38; rugs. As always our skilled
                consultants are standing by to guide you through and help make
                your house a home.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="c-12 gutter flex-center">
            <div className={cx('about-shop-logo-wrapper')}>
              <Image
                src={vvs_archive_product_logo}
                alt="About shop logo"
                className={cx('about-shop-logo')}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="c-12 gutter flex-center">
            <MyButton size={BUTTON_SIZE.md} type={BUTTON_TYPE.primary}>
              Discover lenleys
            </MyButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
