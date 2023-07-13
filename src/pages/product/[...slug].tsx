/* eslint-disable import/extensions */
import { NextPage } from 'next';
import HomeTemplate from '@/templates/Home';
import ProductDetail from '@/components/ProductDetail';
const ProductDetailPage: NextPage = () => {
  return (
    <HomeTemplate>
      <ProductDetail />
    </HomeTemplate>
  );
};

export default ProductDetailPage;
