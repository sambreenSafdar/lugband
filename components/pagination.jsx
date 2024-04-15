// Pagination.js
import React from 'react';
import { Button } from './ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const Pagination = ({
  currentPage,
  totalCount,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <span>{`${currentPage} - ${totalPages} of ${totalPages}`}</span>
      <Button
        className="rounded-full hover:bg-white bg-white text-green-800 font-semibold"
        size="icon"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </Button>
      <Button
        className="rounded-full hover:bg-white bg-white text-green-800 font-semibold"
        size="icon"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Pagination;
