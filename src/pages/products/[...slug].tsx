/* eslint-disable import/extensions */
import { NextPage } from 'next';
import HomeTemplate from '@/templates/Home';
import ProductsPage from '@/components/Products';
const ProductsScreen: NextPage = () => {
  return (
    <HomeTemplate>
      <ProductsPage />
    </HomeTemplate>
  );
};

export default ProductsScreen;
