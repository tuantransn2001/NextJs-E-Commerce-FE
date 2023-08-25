/* eslint-disable import/extensions */
import React, { useState } from 'react';
import FilterBox from './filterBox';
import ProductSorting from './productSorting';
import LoadingScreen from '../helpers/loadingScreen';
import PaginatedItems from '../pagination';
import classNames from 'classnames/bind';
import { useGet, useGetURLParams } from '@/customizes/hooks';
import Page from '../helpers/page';
<<<<<<< HEAD
import { Product, ProductVariant } from '@/domain/common';
=======
import { Product, ProductVariant } from '@/ts/types/product.type';
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
import Image from 'next/image';
import { handleGetHrefArr, isEmpty } from '@/common';
import { API_PATH } from '@/ts/enums/api_enums';
import { useRouter } from 'next/router';
const cx = classNames.bind(require('./style/ProductPage.module.scss'));

interface ProductProps {
  data?: Product;
}

const Product = ({ data }: ProductProps) => {
  const router = useRouter();
  const { name, imgSrc, price } = data?.variants[0] as ProductVariant;
  return (
    <div
      onClick={() => {
        router.push({
          pathname: `/product/${data?.id}`,
        });
      }}
      className="c-3 gutter"
    >
      <div className={cx('product-wrapper')}>
        <div className={cx('product-img-link-wrapper')}>
          <Image src={imgSrc} alt={name} width={200} height={200} />
        </div>
        <span className={cx('product-name')}>{name}</span>
        <span className={cx('product-price')}>{`From £${price}`}</span>
      </div>
    </div>
  );
};

const ProductsPage = ({}) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const params = useGetURLParams();
  const hrefTitle = handleGetHrefArr()[handleGetHrefArr().length - 1];

  const { data: products, isLoading } = useGet(
    API_PATH.getAllProduct,
    {
      page_size: 12,
      page_number: pageNumber,
    },
    {
      title: params ? params[0] : hrefTitle,
    },
  );

  const renderCurrentItems = () =>
    products?.data.map((p: Product) => {
      return <Product data={p} key={p.id} />;
    });

  const isNotOK = isLoading || isEmpty(products?.data);

  return isNotOK ? (
    <LoadingScreen />
  ) : (
    <Page title="In stock">
      <section className="page-body grid wide">
        <div className="row mb-4-2">
          <div className="c-12 gutter">
<<<<<<< HEAD
            <FilterBox />
          </div>
        </div>

        <div className="row mb-4-2">
          <div className="c-12 gutter">
=======
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
            <ProductSorting itemPerPage={8} itemLength={products?.length} />
          </div>
        </div>
        <div className="row mb-4-2">{renderCurrentItems()}</div>
        <PaginatedItems
          items={[...Array(products?.length)]}
          itemsPerPage={8}
          setPageNumber={setPageNumber}
        />
      </section>
    </Page>
  );
};

export default ProductsPage;
<<<<<<< HEAD
=======

// TODO: Handle Filter box ...
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
