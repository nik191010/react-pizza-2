import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import { setCurrentPage } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => state.filter);

  // Sets the current page number
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
