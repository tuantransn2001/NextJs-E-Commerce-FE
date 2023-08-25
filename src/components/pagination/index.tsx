/* eslint-disable import/extensions */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
const cx = classNames.bind(require('./style/pagination.module.scss'));

interface PaginationItemsProps<T> {
  items: T[];
  itemsPerPage: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

type HandlePageClick = (event: { selected: number }) => void;
const Pagination = ReactPaginate as any;
function PaginatedItems<T>({
  items,
  itemsPerPage,
  setPageNumber,
}: PaginationItemsProps<T>) {
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  useEffect(() => {
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [items, itemOffset, itemsPerPage]);

  const handlePageClick: HandlePageClick = ({ selected }) => {
    const newOffset = (selected * itemsPerPage) % items.length;

    setPageNumber(selected);
    setItemOffset(newOffset);
  };

  return (
    <div className="row mb-4-2">
      <div className="c-12 gutter flex-center">
        <Pagination
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName={cx('pagination:number')}
          breakLabel="..."
          containerClassName={cx('pagination:container')}
          activeClassName={cx('pagination:active')}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default PaginatedItems;
