/** @jsxImportSource @emotion/react */
'use client';

import { COUNT_PER_PAGE } from '../../model/consts';

import {
  StyledPaginationButton,
  wrapperPaginationStyles,
} from './TablePagination.styles';

type TablePagination = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalCount: number | null;
};

const TablePagination = ({
  setCurrentPage,
  currentPage,
  totalCount,
}: TablePagination) => {
  const pageNumbers = [];

  const onSetCurrentPage = (value: number) => {
    setCurrentPage(value);
  };

  if (totalCount) {
    const lastPage = Math.ceil(totalCount / COUNT_PER_PAGE);
    for (let i = 1; i < lastPage; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <ul css={wrapperPaginationStyles}>
      {pageNumbers.map((num) => {
        return (
          <li key={num} onClick={() => onSetCurrentPage(num)}>
            <StyledPaginationButton active={currentPage === num}>
              {num}
            </StyledPaginationButton>
          </li>
        );
      })}
    </ul>
  );
};

export default TablePagination;
