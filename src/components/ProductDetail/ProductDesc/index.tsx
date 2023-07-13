/* eslint-disable import/extensions */
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import payment_cards from '@/assets/img/Products/payment_cards.png';
import classNames from 'classnames/bind';
import { Product, ProductVariant } from '@/domain/product.d.type';
import MyButton from '@/components/helpers/MyButton';
import { BUTTON_TYPE } from '@/ts/enums/common';
import Tab from '../Tab/Tab';
import { useTitle } from '@/customizes/hooks';
const cx = classNames.bind(require('./style/ProductDesc.module.scss'));
const tabData = ['Description', 'Additional information', 'Delivery'];
const paymentOptionData = [
  {
    type: 'Pay Deposit',
    benefit: 'Pay a 25% deposit per item',
  },
  {
    type: 'Pay Full',
  },
];
interface ContentProps {
  currentTab: string;
}

const Content = ({ currentTab }: ContentProps): JSX.Element => {
  switch (currentTab) {
    case tabData[0]: {
      return (
        <div className={cx('description-tab-content-wrapper')}>
          <p className="paragraph-text-style mb-2">
            Quickship models available in 6-8 weeks. Selected Fabric/Wood
            combinations only.
          </p>
          <p className="paragraph-text-style mb-3">
            With its contemporary design and individually reclining wide seats,
            the Buckingham upholstery collection brings both ultimate
            <br /> comfort and style to any room while refusing to give up any
            of its amazing build quality or high-quality materials. This 2
            Seater <br /> Sofa is available in 3 different colour combinations
            that are available quicker than usual.
          </p>

          <ul className="mb-3">
            <li>
              <span className="paragraph-text-style">
                Available in 3 different Leather/Wood combinations.
              </span>
            </li>
            <li>
              <span className="paragraph-text-style">
                10 Year internal mechanism guarantee.
              </span>
            </li>
            <li>
              <span className="paragraph-text-style">
                If you would like to order this in a different colour
                combination, please click here or visit us in-store.
              </span>
            </li>
          </ul>

          <h4 className="h4-size-default">
            VIEW THE STRESSLESS RANGE AND SEE THE SUITE IN YOUR HOME WITH THE{' '}
            <br /> STRESSLESS @HOME APP, AVAILABLE FOR APPLE AND ANDROID DEVICES
            BELOW.
          </h4>
        </div>
      );
    }
    case tabData[1]: {
      return (
        <div className={cx('additional-information-wrapper')}>
          <div className="grid">
            <div className="row">
              <div className="c-6 gutter paragraph-text-style">Dimensions</div>
              <div className="c-6 gutter paragraph-text-style">
                W: cm x H: cm x L: cm
              </div>
            </div>
          </div>
        </div>
      );
    }
    case tabData[2]: {
      return (
        <div className={cx('delivery-wrapper')}>
          <p className="paragraph-text-style mb-2">
            <span className="paragraph-text-style-strong">Accessories:</span>
            £5 for mainland UK delivery. Delivery times can vary depending on
            suppliers and stock locations, but we will always <br /> aim to
            deliver accessory orders within 7-10 working days where delivery is
            available.
          </p>
          <p className="paragraph-text-style mb-3">
            <span className="paragraph-text-style-strong">Furniture:</span>
            Within Kent and East Sussex we charge a competitive flat rate of £59
            as a contribution towards delivery and <br />
            installation per order. We can also deliver to West Sussex and
            Surrey and the delivery contribution is £100.
          </p>

          <p className="paragraph-text-style">
            Please see our{' '}
            <div style={{ textDecoration: 'underline' }}>Delivery Services</div>{' '}
            page for more information.
          </p>
        </div>
      );
    }
    default: {
      return <></>;
    }
  }
};

const ProductInformation = ({}) => {
  const [currentTab, setCurrentTab] = useState(tabData[0]);

  return (
    <div className={cx('product-information-extend-wrapper')}>
      <Tab tabContentList={tabData} setCurrentTab={setCurrentTab} />
      <Content currentTab={currentTab} />
    </div>
  );
};

const PaymentOptions = ({}) => {
  const [indexActive, setIndexActive] = useState<number>(0);

  return (
    <div className={`${cx('payment-options-wrapper')} grid`}>
      <div className="row">
        {paymentOptionData.map((paymentOption, index) => {
          return (
            <div
              className="c-6 gutter"
              key={paymentOption.type}
              onClick={() => setIndexActive(index)}
            >
              <label
                htmlFor={paymentOption.type}
                className={cx('payment-option')}
              >
                <input
                  type="radio"
                  id={paymentOption.type}
                  checked={indexActive === index}
                />
                <span>{paymentOption.type}</span>
              </label>
              <span className={cx('payment-benefit')}>
                {paymentOption.benefit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const ProductMeta = ({}) => {
  return (
    <>
      <div className={`${cx('product-meta-wrapper')}`}>
        <div className={cx('product-meta-row-content')}>
          <span className={cx('label')}>SKU: </span>
          <span className={cx('caption')}>9000047694</span>
        </div>
        <div className={cx('product-meta-row-content')}>
          <span className={cx('label')}>Categories: </span>
          <span className={cx('caption')}>render category here</span>
        </div>
        <div className={cx('product-meta-row-content')}>
          <span className={cx('label')}>Brand: </span>
          <span className={cx('caption')}>Stressless</span>
        </div>
      </div>
      <div className="payment-cards-img-wrapper flex-center">
        <Image src={payment_cards} alt="payment cards" />
      </div>
    </>
  );
};

interface ProductDesc {
  productDetail: Product;
}

const ProductDesc = ({ productDetail }: ProductDesc) => {
  const [productVariant, setProductVariant] = useState<ProductVariant>(
    productDetail.variants[0],
  );
  useTitle(`Lenleys - ${productVariant.name}`);

  const handleSetProductVariant = (e: ChangeEvent<HTMLSelectElement>) => {
    const targetProductVariant = productDetail.variants.find(
      ({ id }) => id === e.target.value,
    ) as ProductVariant;
    setProductVariant({ ...targetProductVariant });
  };
  return (
    <div className={cx('product-description-wrapper')}>
      <div className="row">
        <div className="c-6 gutter">
          <Image
            className={cx('product-detailt-img')}
            width={200}
            height={200}
            src={productVariant.imgSrc as string}
            alt={productVariant.name as string}
          />
        </div>

        <div className="c-5 gutter">
          <div className={cx('product-information-wrapper')}>
            <span className={cx('product-name')}>{productVariant.name}</span>
            <span className={cx('product-price-wrapper')}>
              <span className={cx('old-price')}>£3,179.00</span>
              <span className={cx('discount-price')}>
                £{productVariant.price}
              </span>
            </span>
            <Select placeholder="Variants" onChange={handleSetProductVariant}>
              {productDetail.variants.map((p) => (
                <option value={p.id} key={p.name}>
                  {p.name}
                </option>
              ))}
            </Select>
            <PaymentOptions />
            <div className={cx('product-options-wrapper')}>
              <h4 className={cx('product-option-title')}>Storage Options</h4>
              <ul className={cx('product-option-list')}>
                {productVariant?.options.map((option) => {
                  return (
                    <li className={cx('option-item')} key={option.id}>
                      <Image
                        width={200}
                        height={200}
                        className={cx('option-item-img')}
                        src={option.v}
                        alt={option.k}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <MyButton maxWidth type={BUTTON_TYPE.primary}>
              ADD TO BASKET
            </MyButton>
            <ProductMeta />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="c-12 gutter flex-center">
          <ProductInformation />
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
