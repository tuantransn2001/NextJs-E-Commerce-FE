/* eslint-disable import/extensions */
import overviewImg from '../../assets/img/CategoryPage/overviewImg.png';

import banner from '../../assets/img/categoryPage/collections/banner.png';
import { Brands } from './Brands/Brands';
import classNames from 'classnames/bind';
import MyButton from '../helpers/MyButton';
import LoadingScreen from '../helpers/LoadingScreen';
import { useGet, useGetURLParams } from '@/customizes/hooks';
import { BUTTON_SIZE, BUTTON_TYPE } from '@/ts/enums/common';
import { Product, ProductVariant } from '@/domain/common';
import {
  handleFormatTitleInCludeSpecChar,
  handleGetHrefArr,
  isEmpty,
} from '@/common';
import { API_PATH } from '@/ts/enums/api_enums';
import Image from 'next/image';
const cx = classNames.bind(require('./style/CategoryPage.module.scss'));

interface SensationalProducts {
  title: string;
}

const SensationalProducts = ({ title }: SensationalProducts) => {
  const { data: productsData, isLoading } = useGet(
    API_PATH.getAllProduct,
    {
      page_number: 1,
      page_size: 4,
    },
    { title },
  );

  const renderProductsDetail = () => {
    return isLoading || isEmpty(productsData?.data) ? (
      <LoadingScreen />
    ) : (
      productsData?.data.map((product: Product, index: number) => {
        const p_v_detail: ProductVariant = product.variants[0];

        return (
          <div className="c-3 gutter" key={index}>
            <div className={cx('category-sensational-products-detail-wrapper')}>
              <div
                className={cx(
                  'category-sensational-products-detail-img-wrapper',
                )}
              >
                <div
                  className={cx(
                    'category-sensational-products-detail-img-square-shape',
                  )}
                >
                  <Image
                    width={200}
                    height={200}
                    src={p_v_detail.imgSrc}
                    alt={p_v_detail.name}
                    className={cx('category-sensational-products-detail-img')}
                  />
                </div>
              </div>
              <h4
                className={`${cx(
                  'category-sensational-products-detail-name',
                )} h4-size-default`}
              >
                {p_v_detail.name}
              </h4>
            </div>
          </div>
        );
      })
    );
  };

  return (
    <div className={cx('category-sensational-products-wrapper')}>
      <div className={`${cx('category-sensational-product')} grid wide`}>
        <div className="row">
          <div className="c-12 gutter">
            <div
              className={`${cx('categroy-sesational-products-content')} mb-2`}
            >
              <h2 className="h2-size-default">{title}</h2>
              <p className="paragraph-text-style">
                Our buyers literally search far and wide across the globe to
                find the best, high quality fashionable sofas that come{' '}
                <br></br> from some of biggest and brightest names in design and
                manufacturing. Sink into designs from Orla Kiely, Collins{' '}
                <br></br> Hayes, Stressless, Parker Knoll, Himolla, ercol and
                many more.
              </p>
              <h6 className="h6-size-default">
                YOU CAN ALSO SPREAD YOUR PAYMENTS WITH OUR INTEREST FREE CREDIT
                AVAILABLE <br></br> WHEN YOU SPEND OVER £1000
              </h6>
            </div>

            <div className="row mb-2">
              <div className="c-12 gutter">
                <div
                  className={`${cx(
                    'category-sensational-products-list',
                  )} grid wide`}
                >
                  <div className="row">{renderProductsDetail()}</div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="c-12 gutter flex-center">
                <MyButton
                  size={BUTTON_SIZE.md}
                  href={`/products/${title}`}
                  type={BUTTON_TYPE.primary}
                >{`View all ${handleFormatTitleInCludeSpecChar(
                  title,
                  '&',
                )}`}</MyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Collection = ({}) => {
  return (
    <div className={cx('category-colection-wrapper')}>
      <div className={`${cx('category-collection')} grid wide`}>
        <div className="row">
          <div className="c-5 gutter">
            <div
              className={`${cx('category-collection-content-wrapper')} mb-3`}
            >
              <h3 className="h3-size-default">{`LET'S TRANSFORM YOUR SPACE`}</h3>
              <p className="paragraph-text-style-strong">
                At Lenleys Home we have a passion for high quality furniture
                that suits all<br></br> tastes and fashions.
              </p>
              <p className="paragraph-text-style">
                Our ranges are available in numerous coloured fabrics
                andpatterns, and we
                <br></br>
                stock a beautiful array of both manual and electric recliner
                sofas, love seats,
                <br></br>
                and chaise end combinations. Tempted to make a change?
              </p>

              <MyButton size={BUTTON_SIZE.md} type="primary">
                See collection
              </MyButton>
            </div>
          </div>
          <div className="c-7 gutter">
            <div className={cx('category-collection-banner-link-wrapper')}>
              <Image
                src={banner}
                alt="Category Collection"
                className={cx('category-collection-banner-link-img')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Category = ({}) => {
  const params = useGetURLParams();
  const hrefID = handleGetHrefArr()[handleGetHrefArr().length - 1];
  const { data, isLoading } = useGet(API_PATH.getOneCategory, {
    id: params ? params[0] : hrefID,
  });
  const { title, subTitle, description } = data;
  return isLoading || !hrefID || !params ? (
    <LoadingScreen />
  ) : (
    <div className={cx('category-wrapper')}>
      <div className={`${cx('category-overview-wrapper')}`}>
        <div className={`${cx('category-overview')} grid wide`}>
          <div className="row">
            <div className="c-6 gutter">
              <div className={cx('category-overview-content')}>
                <h1 className="h1-size-xl">{title}</h1>
                <h3 className="h3-size-default">{subTitle}</h3>
                <span className={cx('category-overview-strong-text')}>
                  <h2 className="h2-size-large">EXTRA 10% OFF SALE PRICES</h2>
                </span>
                <p className="paragraph-text-style mb-1">{description}</p>
              </div>
            </div>
            <div className="c-6 gutter">
              <div className={cx('category-img-wrapper')}>
                <Image
                  src={overviewImg}
                  alt="category img"
                  className={cx('category-img')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SensationalProducts title={title} />
      <Collection />
      <Brands />
    </div>
  );
};

export default Category;
