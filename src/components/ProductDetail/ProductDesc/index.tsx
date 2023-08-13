/* eslint-disable import/extensions */
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import payment_cards from '../../../assets/img/Products/payment_cards.png';
import classNames from 'classnames/bind';
import { Cart, Product, ProductVariant } from '@/domain/common';
import MyButton from '@/components/helpers/MyButton';
import { BUTTON_SIZE, BUTTON_TYPE } from '@/ts/enums/common';
import Tab from '../Tab/Tab';
import { useTitle } from '@/customizes/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, userSelector } from '@/redux/slice/auth.slice';
import { cartSelector, setCart } from '@/redux/slice/cart.slice';
import { HREF } from '@/ts/enums/common';
import { useRouter } from 'next/navigation';
import { addProductToCartDeepChecker } from '@/ts/utils/dataDeepChecker';
import MyModal from '@/components/helpers/Modal';
import CartService from '@/services/cart.service';
import { RESPONSE_STATUS } from '@/ts/enums/api_enums';
import { ObjectType, ResponseAttributes } from '@/ts/types/common';
import { ProductCartDTO } from '@/ts/dto/common.dto';
import { isEmpty } from '@/common';
import MySelect from '@/components/helpers/MySelect';
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
    <div className={`${cx('payment-options-wrapper')}`}>
      {paymentOptionData.map((paymentOption, index) => {
        return (
          <div
            className={cx('payment-option-wrapper')}
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

const SUBMIT_MODAL_DATA: ObjectType = {
  fail: {
    message: 'Something went wrong. Please try again!',
    nextActionContent: 'Try again',
  },
};

const handleAddProdToCart = (cart: Cart, payload: ProductVariant) => {
  const cartProdCopy = [...cart.products] as ProductCartDTO[];

  const itemIndex = cartProdCopy.findIndex(
    (e) => e.product_variant_id === payload.id,
  );

  if (itemIndex > -1) {
    const updateQtyProd = {
      product_variant_id: cartProdCopy[itemIndex].product_variant_id,
      quantity: cartProdCopy[itemIndex].quantity + 1,
    };
    cartProdCopy[itemIndex] = { ...updateQtyProd };
  } else {
    cartProdCopy.push({ product_variant_id: payload.id, quantity: 1 });
  }

  return cartProdCopy.map(({ quantity, product_variant_id }) => ({
    quantity,
    product_variant_id,
  }));
};

const ProductDesc = ({ productDetail }: ProductDesc) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector(userSelector);
  const cartData = useSelector(cartSelector);
  const isAuth = useSelector(isAuthSelector);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [reqRes, setReqRes] = useState<string>('fail');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [productVariant, setProductVariant] = useState<ProductVariant>(
    productDetail.variants[0],
  );

  const handlePopupModelFail = () => {
    setReqRes('fail');
    setIsOpen(false);
  };

  useTitle(`Lenleys - ${productVariant.name}`);
  const handleAddProductToCart = async () => {
    setIsLoading(true);
    if (!isAuth) {
      // ? re-direct auth page option
      router.push(HREF.auth);
    } else {
      // ? Get User id -> dispatch addToCart method to server
      const { error, value } = addProductToCartDeepChecker({
        user_id: userData?.id,
        products: !isEmpty(cartData as Cart)
          ? handleAddProdToCart(cartData as Cart, productVariant)
          : [{ product_variant_id: productVariant.id, quantity: 1 }],
      });
      if (error) {
        handlePopupModelFail();
      }
      if (value) {
        const { status, data } = (await CartService.add(
          value,
        )) as ResponseAttributes;
        if (status === RESPONSE_STATUS.SUCCESS) {
          dispatch(setCart(data));
          router.push(HREF.cart);
        }
        if (status === RESPONSE_STATUS.FAIL) {
          handlePopupModelFail();
        }
      }
    }
    setIsLoading(false);
  };

  const handleSetProductVariant = (e: ChangeEvent<HTMLSelectElement>) => {
    const targetProductVariant = productDetail.variants.find(
      ({ id }) => id === e.target.value,
    ) as ProductVariant;
    setProductVariant({ ...targetProductVariant });
  };

  return (
    <>
      <MyModal
        isOpen={isOpen}
        type={reqRes}
        message={SUBMIT_MODAL_DATA[reqRes].message}
        nextActionContent={SUBMIT_MODAL_DATA[reqRes].nextActionContent}
        handleOnSwitchNextAction={() => setIsOpen(false)}
        handleOnClose={() => setIsOpen(false)}
      />

      <div className={cx('product-description-wrapper')}>
        <div className="row">
          <div className="c-6 gutter flex-center">
            <Image
              className={cx('product-detailt-img')}
              width={200}
              height={200}
              src={productVariant.imgSrc as string}
              alt={productVariant.name as string}
            />
          </div>

          <div className="c-4 gutter">
            <div className={cx('product-information-wrapper')}>
              <span className={cx('product-name')}>{productVariant.name}</span>
              <span className={cx('product-price-wrapper')}>
                <span className={cx('old-price')}>£3,179.00</span>
                <span className={cx('discount-price')}>
                  £{productVariant.price}
                </span>
              </span>

              <MySelect
                placeholder={productVariant.name}
                options={productDetail.variants.map((variant) => ({
                  id: variant.id,
                  content: variant.name,
                }))}
                onChange={handleSetProductVariant}
              />
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
              <MyButton
                maxWidth
                isLoading={isLoading}
                size={BUTTON_SIZE.lg}
                type={BUTTON_TYPE.primary}
                onClick={() => {
                  handleAddProductToCart();
                }}
              >
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
    </>
  );
};

export default ProductDesc;
