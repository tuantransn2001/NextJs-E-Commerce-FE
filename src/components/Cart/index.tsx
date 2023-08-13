/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
import Page from '../helpers/Page';
import Image from 'next/image';
import { RESPONSE_STATUS } from '@/ts/enums/api_enums';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector } from '@/redux/slice/auth.slice';
import { handleCalcCartTotal, isEmpty } from '@/common';
import MyButton from '@/components/helpers/MyButton';
import { Cart, CartItem } from '@/domain/common';
import { BUTTON_SIZE, BUTTON_TYPE, HREF } from '@/ts/enums/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import {
  cartSelector,
  minusItemQuantity,
  plusItemQuantity,
  removeItem,
  setCart,
} from '@/redux/slice/cart.slice';
import MyModal from '../helpers/Modal';
import { ObjectType, ResponseAttributes } from '@/ts/types/common';
import { addProductToCartDeepChecker } from '@/ts/utils/dataDeepChecker';
import { AddProductToCartDTO, ProductCartDTO } from '@/ts/dto/common.dto';
import CartService from '@/services/cart.service';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/Cart.module.scss'));

const SUBMIT_MODAL_DATA: ObjectType = {
  success: {
    message: 'Your item has been added',
    nextActionContent: 'Continue shopping',
  },
  fail: {
    message: 'Something went wrong. Please try again!',
    nextActionContent: 'Try again',
  },
};

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuth = useSelector(isAuthSelector);
  const cartData = useSelector(cartSelector);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [reqRes, setReqRes] = useState<string>('fail');

  const handlePopupModelSuccess = () => {
    setReqRes('success');
    setIsOpen(true);
  };
  const handlePopupModelFail = () => {
    setReqRes('fail');
    setIsOpen(false);
  };

  const handleCheckIsCartEmpty = () =>
    cartData === null || isEmpty(cartData.products);

  const handleSwitchToCheckoutPage = () => {
    if (isAuth) {
      router.push(HREF.checkout);
    } else {
      router.push(HREF.auth);
    }
  };

  const handleSubmitUpdate = async () => {
    const formatCartPayload = cartData?.products.reduce(
      (
        result: AddProductToCartDTO,
        { product_variant_id, quantity }: ProductCartDTO,
      ) => {
        result.products.push({
          product_variant_id,
          quantity,
        } as ProductCartDTO);
        return result;
      },
      { user_id: cartData.user_id, products: [] },
    ) as AddProductToCartDTO;

    const { value, error } = addProductToCartDeepChecker(
      formatCartPayload as Cart,
    );
    if (error) {
      handlePopupModelFail();
    }

    if (value) {
      const { status, data } = (await CartService.add(
        value,
      )) as ResponseAttributes;
      if (status === RESPONSE_STATUS.SUCCESS) {
        dispatch(setCart(data));
        handlePopupModelSuccess();
      }
      if (status === RESPONSE_STATUS.FAIL) {
        handlePopupModelFail();
      }
    }
  };

  const handleUpdateQuantity = useCallback(
    (direction: number, index: number) => {
      if (direction === -1) {
        dispatch(minusItemQuantity({ index }));
      }

      if (direction === 0) {
        dispatch(removeItem({ index }));
      }

      if (direction === 1) {
        dispatch(plusItemQuantity({ index }));
      }
    },
    [],
  );

  return (
    <>
      <MyModal
        isOpen={isOpen}
        type={reqRes}
        message={SUBMIT_MODAL_DATA[reqRes].message}
        nextActionContent={SUBMIT_MODAL_DATA[reqRes].nextActionContent}
        handleOnSwitchNextAction={() => router.push(HREF.home)}
        handleOnClose={() => setIsOpen(false)}
      />
      <Page title="Complete your order">
        <div className="grid">
          <div className="row">
            <div className="c-8 gutter">
              <div className={cx('basket')}>
                <div className={cx('basket-labels')}>
                  <ul className="flex-center">
                    <li
                      className={cx(
                        'local_paragraph-text-style-strong item item-heading',
                      )}
                    >
                      Product
                    </li>
                    <li
                      className={cx('local_paragraph-text-style-strong price')}
                    >
                      Price
                    </li>
                    <li
                      className={cx(
                        'local_paragraph-text-style-strong quantity',
                      )}
                    >
                      Quantity
                    </li>
                    <li
                      className={cx(
                        'local_paragraph-text-style-strong subtotal subtotal-heading',
                      )}
                    >
                      Subtotal
                    </li>
                  </ul>
                </div>

                {handleCheckIsCartEmpty() ? (
                  <p>Cart Empty</p>
                ) : (
                  cartData?.products.map((product: CartItem, index: number) => {
                    const {
                      product_variant_id,
                      name,
                      imgSrc,
                      price,
                      quantity,
                    } = product;

                    return (
                      <div
                        className={cx('basket-product')}
                        key={product_variant_id}
                      >
                        <MyButton
                          transparent
                          style={{ color: '#333' }}
                          size={BUTTON_SIZE.sm}
                          type={BUTTON_TYPE.primary}
                          onClick={() => handleUpdateQuantity(0, index)}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </MyButton>
                        <div className={cx('product-image-wrapper')}>
                          <Image
                            className={cx('product-image')}
                            src={imgSrc}
                            width={50}
                            height={50}
                            alt={name}
                          />
                        </div>
                        <div className={cx('product-details')}>
                          <h1 className={cx('local_paragraph-text-style')}>
                            {quantity} x {name}
                            <p className={cx('local_paragraph-text-style')}>
                              Navy, Size 18
                            </p>
                            <p className={cx('local_paragraph-text-style')}>
                              Product SKU: FJSIQW
                            </p>
                          </h1>
                        </div>
                        <div
                          className={cx(
                            'local_paragraph-text-style price-item',
                          )}
                        >
                          {price}
                        </div>
                        <div className={cx('quantity-wrapper')}>
                          <MyButton
                            transparent
                            style={{ color: '#333' }}
                            size={BUTTON_SIZE.sm}
                            type={BUTTON_TYPE.primary}
                            onClick={() => handleUpdateQuantity(-1, index)}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </MyButton>
                          <span className={cx('local_paragraph-text-style')}>
                            {quantity}
                          </span>
                          <MyButton
                            transparent
                            style={{ color: '#333' }}
                            size={BUTTON_SIZE.sm}
                            type={BUTTON_TYPE.primary}
                            onClick={() => handleUpdateQuantity(1, index)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </MyButton>
                        </div>
                        <div
                          className={cx('local_paragraph-text-style subtotal')}
                        >
                          {+price * quantity}
                        </div>
                      </div>
                    );
                  })
                )}

                <div className={cx('basket-module')}>
                  <div className={cx('promotion-module')}>
                    <label htmlFor="promo-code">
                      <span className={cx('local_paragraph-text-style-strong')}>
                        Do you have promo code ?
                      </span>
                    </label>
                    <input
                      id="promo-code"
                      type="text"
                      name="promo-code"
                      maxLength={5}
                      className={cx('promo-code-field')}
                    />

                    <MyButton
                      style={{
                        marginTop: '-0.2rem',
                        paddingLeft: '2.4rem',
                        paddingRight: '2.4rem',
                      }}
                      size={BUTTON_SIZE.lg}
                      type={BUTTON_TYPE.primary}
                      className={cx('promo-code-cta')}
                    >
                      Apply
                    </MyButton>
                  </div>

                  <MyButton
                    style={{
                      paddingLeft: '2.4rem',
                      paddingRight: '2.4rem',
                    }}
                    size={BUTTON_SIZE.lg}
                    type={BUTTON_TYPE.primary}
                    onClick={handleSubmitUpdate}
                  >
                    Update Basket
                  </MyButton>
                </div>
              </div>
            </div>
            <div className="c-4 gutter">
              <div className={cx('summary')}>
                <div className={cx('summary-total-items ')}>
                  <span className={cx('total-items ')} />
                  <span className={cx('local_paragraph-text-style-strong')}>
                    Items in your Bag
                  </span>
                </div>
                <div className={cx('summary-subtotal')}>
                  <div
                    className={cx(
                      'subtotal-title local_paragraph-text-style-strong',
                    )}
                  >
                    Subtotal
                  </div>
                  <div
                    className={cx(
                      'subtotal-value final-value local_paragraph-text-style',
                    )}
                    id="basket-subtotal"
                  >
                    {handleCalcCartTotal(cartData)}
                  </div>
                  <div className={cx('summary-promo hide')}>
                    <div className={cx('promo-title')}>Promotion</div>
                    <div
                      className={cx('promo-value final-value')}
                      id="basket-promo"
                    />
                  </div>
                </div>
                <div className={cx('summary-delivery')}>
                  <select
                    name="delivery-collection"
                    className={cx('summary-delivery-selection')}
                  >
                    <option value="collection">Collection</option>
                    <option value="first-class">Royal Mail 1st Class</option>
                    <option value="second-class">Royal Mail 2nd Class</option>
                    <option value="signed-for">
                      Royal Mail Special Delivery
                    </option>
                  </select>
                </div>
                <div className={cx('summary-total')}>
                  <div className={cx('total-title')}>Total</div>
                  <div
                    className={cx(
                      'total-value final-value local_paragraph-text-style',
                    )}
                    id="basket-total"
                  >
                    {handleCalcCartTotal(cartData)}
                  </div>
                </div>
                <div className={cx('summary-checkout')}>
                  <MyButton
                    size={BUTTON_SIZE.lg}
                    maxWidth
                    type={BUTTON_TYPE.primary}
                    onClick={handleSwitchToCheckoutPage}
                  >
                    Proceed to checkout
                  </MyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default Cart;
