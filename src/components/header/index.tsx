/* eslint-disable import/extensions */
import MyButton from '../helpers/myButton';
import Image from 'next/image';
import {
  viewStoreIcon,
  searchIcon,
  authIcon,
  cartIcon,
} from '@/components/svgIcon';
import lenleys_main_logo from '../../assets/img/logo/lenleys_main_logo.png';
import classNames from 'classnames/bind';
import { BUTTON_TYPE, HREF } from '@/ts/enums/common';
<<<<<<< HEAD
=======
import MyModal from '../helpers/modal';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductService from '@/services/product.service';
import { Product } from '@/ts/types/product.type';
import MySelect from '../helpers/mySelect';
import { SearchByNamePayload } from '@/domain/product';
import { RESPONSE_STATUS } from '@/ts/enums/api_enums';
import { isEmpty } from '@/common';
import CartProduct from '../cartProduct';
import { Box, OrderedList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
const cx = classNames.bind(require('./style/Header.module.scss'));

const storeLocationBtnContentStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '.8rem',
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#272525',
};

const headingTitleStyle = {
  fontSize: '1.1rem',
  fontWeight: '500',
  color: '#ffffff',
};
<<<<<<< HEAD

export default function Header({}) {
  return (
    <header id={cx('header')} className={cx('bg-wrapper')}>
      <div className={`${cx('widget-elementor-bg')}`}>
        <MyButton transparent type={BUTTON_TYPE.primary}>
          <span style={headingTitleStyle}>
            ACCESSORIES AVAILABLE FOR NATIONWIDE DELIVERY
          </span>
        </MyButton>
      </div>
      <div className="grid wide">
        <div className={cx('header')}>
          <div className="row mb-2">
            <div className="c-3 gutter flex-item-horizontal-start gap-1">
              <MyButton href={HREF.auth} transparent type={BUTTON_TYPE.primary}>
                {authIcon}
              </MyButton>

              <MyButton href={HREF.info} transparent type={BUTTON_TYPE.primary}>
                <span style={storeLocationBtnContentStyle}>
                  {viewStoreIcon} OUR STORES
                </span>
              </MyButton>
            </div>
            <div className="c-6 gutter flex-center">
              <MyButton href={HREF.home} transparent type={BUTTON_TYPE.primary}>
                <Image
                  src={lenleys_main_logo}
                  alt="Main Logo"
                  width={136}
                  height={80}
                  className={cx('logo-img')}
                />
              </MyButton>
            </div>
            <div className="c-3 gutter flex-item-horizontal-end gap-1">
              <MyButton transparent type={BUTTON_TYPE.primary}>
                {searchIcon}
              </MyButton>
              <MyButton href={HREF.cart} transparent type={BUTTON_TYPE.primary}>
                {cartIcon}
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </header>
=======
type FormValues = {
  contentSearch: string;
};
export default function Header({}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchProductList, setSearchProductList] = useState<Product[]>([]);
  const { register, resetField, reset, handleSubmit } = useForm<FormValues>();

  const handleSearchProduct = useCallback(
    async ({ contentSearch }: SearchByNamePayload) => {
      const { status, data } = await ProductService.searchByName({
        contentSearch,
      });

      if (status === RESPONSE_STATUS.SUCCESS) {
        setSearchProductList([...data.data]);
      }
      if (status === RESPONSE_STATUS.FAIL) {
        setSearchProductList([]);
      }
    },
    [],
  );

  const handleReset = useCallback(() => {
    setIsOpen(false);
    resetField('contentSearch');
    setSearchProductList([]);
    reset();
  }, []);

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    ({ contentSearch }) => {
      handleSearchProduct({ contentSearch });
    },
    [],
  );
  return (
    <>
      <header id={cx('header')} className={cx('bg-wrapper')}>
        <div className={`${cx('widget-elementor-bg')}`}>
          <MyButton transparent type={BUTTON_TYPE.primary}>
            <span style={headingTitleStyle}>
              ACCESSORIES AVAILABLE FOR NATIONWIDE DELIVERY
            </span>
          </MyButton>
        </div>
        <div className="grid wide">
          <div className={cx('header')}>
            <div className="row mb-2">
              <div className="c-3 gutter flex-item-horizontal-start gap-1">
                <MyButton
                  href={HREF.auth}
                  transparent
                  type={BUTTON_TYPE.primary}
                >
                  {authIcon}
                </MyButton>

                <MyButton
                  href={HREF.info}
                  transparent
                  type={BUTTON_TYPE.primary}
                >
                  <span style={storeLocationBtnContentStyle}>
                    {viewStoreIcon} OUR STORES
                  </span>
                </MyButton>
              </div>
              <div className="c-6 gutter flex-center">
                <MyButton
                  href={HREF.home}
                  transparent
                  type={BUTTON_TYPE.primary}
                >
                  <Image
                    src={lenleys_main_logo}
                    alt="Main Logo"
                    width={136}
                    height={80}
                    className={cx('logo-img')}
                  />
                </MyButton>
              </div>
              <div className="c-3 gutter flex-item-horizontal-end gap-1">
                <MyButton
                  transparent
                  type={BUTTON_TYPE.primary}
                  onClick={() => setIsOpen(true)}
                >
                  {searchIcon}
                </MyButton>
                <MyButton
                  href={HREF.cart}
                  transparent
                  type={BUTTON_TYPE.primary}
                >
                  {cartIcon}
                </MyButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MyModal
        isOpen={isOpen}
        header={
          <div className={cx('dialog-search-header')}>
            <h2 className={cx('dialog-search-title')}>type to search</h2>
            <MyButton
              transparent
              type={BUTTON_TYPE.primary}
              onClick={handleReset}
            >
              <FontAwesomeIcon icon={faXmark} />
            </MyButton>
          </div>
        }
        body={
          <form
            action=""
            className={cx('dialog-search-form-wrapper')}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register('contentSearch')}
              type="text"
              className={cx('dialog-search-input')}
              placeholder="Search Products..."
              required
            />
            {!isEmpty(searchProductList) && (
              <OrderedList className={cx('dialog-search-list-wrapper')}>
                {searchProductList.map((prod, index) => (
                  <CartProduct
                    onClick={() => {
                      router.push({
                        pathname: `/product/${prod.id}`,
                      });
                      handleReset();
                    }}
                    key={index}
                    product={prod}
                  />
                ))}
              </OrderedList>
            )}

            <MyButton
              className={cx('dialog-search-btn')}
              transparent
              type={BUTTON_TYPE.primary}
            >
              <FontAwesomeIcon
                className={cx('dialog-search-btn-icon')}
                icon={faSearch}
              />
            </MyButton>
          </form>
        }
        footer={<></>}
        nextActionContent="next"
        handleOnSwitchNextAction={() => console.log('next')}
        handleOnClose={() => setIsOpen(false)}
      />
    </>
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
  );
}
