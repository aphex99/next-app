'use client';

import { COUNT_PER_PAGE } from '@/src/features/table/model/consts';

type TablePagination = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalCount: number | null;
};

const TablePagination = ({
  currentPage,
  setCurrentPage,
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
    <ul className={`flex gap-2`}>
      {pageNumbers.map((num) => {
        return (
          <li
            className={`${num === currentPage && 'text-red-600 bg-yellow-200'} w-6 text-center rounded-xs cursor-pointer select-none`}
            key={num}
            onClick={() => onSetCurrentPage(num)}
          >
            {num}
          </li>
        );
      })}
    </ul>
  );
};

export default TablePagination;
