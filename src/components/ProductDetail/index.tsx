/* eslint-disable import/extensions */
import React from 'react';
import ProductDesc from './ProductDesc';

import classNames from 'classnames/bind';
import { useGet, useGetURLParams } from '@/customizes/hooks';
import Page from '../helpers/Page';
import { API_PATH } from '@/ts/enums/api_enums';
import LoadingScreen from '../helpers/LoadingScreen';
import { isEmpty } from '@/common';
const cx = classNames.bind(require('./style/ProductDetailPage.module.scss'));

const ProductDetail = ({}) => {
  const [id] = useGetURLParams();

  const { data: productDetail, isLoading } = useGet(API_PATH.getOneProduct, {
    id,
  });

  const isNotOK = isEmpty(productDetail) || isLoading;

  return isNotOK ? (
    <LoadingScreen />
  ) : (
    <Page>
      <div className={`${cx('product-detail-wrapper')} grid`}>
        <ProductDesc productDetail={productDetail} />
      </div>
    </Page>
  );
};

export default ProductDetail;
