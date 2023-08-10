/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
import Page from '../helpers/Page';
import './style/Cart.scss';
import Image from 'next/image';
import { useGet } from '../../customizes/hooks';
import { API_PATH, RESPONSE_STATUS } from '@/ts/enums/api_enums';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthSelector, userSelector } from '@/redux/slice/auth.slice';
import LoadingScreen from '../helpers/LoadingScreen';
import { handleCalcCartTotal, isEmpty } from '@/common';
import MyButton from '@/components/helpers/MyButton';
import { Cart, CartItem } from '@/domain/common';
import { BUTTON_SIZE, BUTTON_TYPE, HREF } from '@/ts/enums/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus,
  faTrash,
  faX,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useCallback, useEffect, useState } from 'react';
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
              <div className="basket">
                <div className="basket-labels">
                  <ul className="flex-center">
                    <li className="paragraph-text-style-strong item item-heading">
                      Product
                    </li>
                    <li className="paragraph-text-style-strong price">Price</li>
                    <li className="paragraph-text-style-strong quantity">
                      Quantity
                    </li>
                    <li className="paragraph-text-style-strong subtotal subtotal-heading">
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
                      <div className="basket-product" key={product_variant_id}>
                        <MyButton
                          transparent
                          style={{ color: '#333' }}
                          size={BUTTON_SIZE.sm}
                          type={BUTTON_TYPE.primary}
                          onClick={() => handleUpdateQuantity(0, index)}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </MyButton>
                        <div className="product-image-wrapper">
                          <Image
                            className="product-image"
                            src={imgSrc}
                            width={50}
                            height={50}
                            alt={name}
                          />
                        </div>
                        <div className="product-details">
                          <h1 className="paragraph-text-style">
                            {quantity} x {name}
                            <p className="paragraph-text-style">
                              Navy, Size 18
                            </p>
                            <p className="paragraph-text-style">
                              Product SKU: FJSIQW
                            </p>
                          </h1>
                        </div>
                        <div className="paragraph-text-style price-item">
                          {price}
                        </div>
                        <div className="quantity-wrapper">
                          <MyButton
                            transparent
                            style={{ color: '#333' }}
                            size={BUTTON_SIZE.sm}
                            type={BUTTON_TYPE.primary}
                            onClick={() => handleUpdateQuantity(-1, index)}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </MyButton>
                          <span className="paragraph-text-style">
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
                        <div className="paragraph-text-style subtotal">
                          {+price * quantity}
                        </div>
                      </div>
                    );
                  })
                )}

                <div className="basket-module">
                  <div className="promotion-module">
                    <label htmlFor="promo-code">
                      <span className="paragraph-text-style-strong">
                        Do you have promo code ?
                      </span>
                    </label>
                    <input
                      id="promo-code"
                      type="text"
                      name="promo-code"
                      maxLength={5}
                      className="promo-code-field"
                    />

                    <MyButton
                      style={{
                        marginTop: '-0.2rem',
                        paddingLeft: '2.4rem',
                        paddingRight: '2.4rem',
                      }}
                      size={BUTTON_SIZE.lg}
                      type={BUTTON_TYPE.primary}
                      className="promo-code-cta"
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
              <div className="summary">
                <div className="summary-total-items ">
                  <span className="total-items " />
                  <span className="paragraph-text-style-strong">
                    Items in your Bag
                  </span>
                </div>
                <div className="summary-subtotal">
                  <div className="subtotal-title paragraph-text-style-strong">
                    Subtotal
                  </div>
                  <div
                    className="subtotal-value final-value paragraph-text-style"
                    id="basket-subtotal"
                  >
                    {handleCalcCartTotal(cartData)}
                  </div>
                  <div className="summary-promo hide">
                    <div className="promo-title">Promotion</div>
                    <div
                      className="promo-value final-value"
                      id="basket-promo"
                    />
                  </div>
                </div>
                <div className="summary-delivery">
                  <select
                    name="delivery-collection"
                    className="summary-delivery-selection"
                  >
                    <option value="collection">Collection</option>
                    <option value="first-class">Royal Mail 1st Class</option>
                    <option value="second-class">Royal Mail 2nd Class</option>
                    <option value="signed-for">
                      Royal Mail Special Delivery
                    </option>
                  </select>
                </div>
                <div className="summary-total">
                  <div className="total-title </span>">Total</div>
                  <div
                    className="total-value final-value paragraph-text-style"
                    id="basket-total"
                  >
                    {handleCalcCartTotal(cartData)}
                  </div>
                </div>
                <div className="summary-checkout">
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
