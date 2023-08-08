import React from 'react';
import { Paginations, StyledReactPaginate } from './style';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selected: { selected: number }) => void;
}

export default function Pagination({ pageCount, currentPage, onPageChange }: PaginationProps) {
  return (
    <Paginations>
      <StyledReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
        disabledClassName={'disabled'}
        forcePage={currentPage - 1}
      />
    </Paginations>
  );
}
