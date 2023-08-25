import React from 'react';
import classNames from 'classnames/bind';
import { Select } from '@chakra-ui/react';
const cx = classNames.bind(require('./style/ProductSorting.module.scss'));

const sortingDropDownData = [
  {
    value: 'default',
    content: 'default sorting',
  },
  {
    value: 'popular',
    content: 'sort by popularity',
  },
  {
    value: 'lastest',
    content: 'sort by lastest',
  },
  {
    value: 'low2high',
    content: 'sort by price: low to high',
  },
  {
    value: 'high2low',
    content: 'sort by price: high to low',
  },
];

interface ProductSorting {
  itemPerPage: number;
  itemLength: number;
}

const ProductSorting = ({ itemPerPage, itemLength }: ProductSorting) => {
  return (
    <div className={cx('products-sorting-wrapper')}>
      <span className={cx('products-result-count')}>
        {`Showing 1-${itemPerPage} of ${itemLength} results`}
      </span>
      <div className={cx('products-sorting-dropdown-wrapper')}>
        <Select placeholder="Select option">
          {sortingDropDownData.map(({ value, content }) => {
            return (
              <option value={value} key={value + content}>
                {content}
              </option>
            );
          })}
        </Select>
      </div>
    </div>
  );
};

export default ProductSorting;
