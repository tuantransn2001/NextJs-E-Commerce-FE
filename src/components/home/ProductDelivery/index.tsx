/* eslint-disable import/extensions */
import Section from '@/components/helpers/section';
import Image from 'next/image';
import { productDelivery } from '@/data/home';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/ProductDelivery.module.scss'));

export default function ProductDelivery({}) {
  return (
    <Section
      title="Ready for delivery"
      borderOptions={{
        direction: 'bottom',
      }}
    >
      <div className={`${cx('products-delivery-list')} grid wide`}>
        <div className="row">
          {productDelivery.map((product, index) => {
            const { img, name, price } = product;
            return (
              <div className="c-3 gutter" key={index}>
                <div className={cx('product-delivery-wrapper')}>
                  <div className={cx('product-delivery-img-wrapper')}>
                    <Image
                      src={img}
                      alt={name}
                      className={cx('product-delivery-img')}
                    />
                  </div>
                  <div className={cx('product-delivery-name-link')}>{name}</div>
                  <span
                    className={cx('product-delivery-price')}
                  >{`£${price}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
