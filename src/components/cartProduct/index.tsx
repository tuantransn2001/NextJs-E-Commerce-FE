import { Product } from '@/ts/types/product.type';
import { ListItem } from '@chakra-ui/react';
import Image from 'next/image';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/CartProduct.module.scss'));
interface CartProductProps {
  product: Product;
  onClick: () => void;
}

const CartProduct = ({ product, onClick }: CartProductProps) => {
  return (
    <ListItem className={cx('item-wrapper')} onClick={onClick}>
      <Image
        className={cx('item-img')}
        src={product.variants[0].imgSrc}
        alt={product.variants[0].name}
        width={200}
        height={200}
      />
      <span className={cx('item-name')}>{product.name}</span>
    </ListItem>
  );
};

export default CartProduct;
