import { useState } from "react";

export const usePagination = (initialPage = 1, initialSize = 10) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [pageSize, setPageSize] = useState<number>(initialSize);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  
  const changePageSize = (newSize: number) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };

  return {
    currentPage,
    pageSize,
    setCurrentPage,
    nextPage,
    prevPage,
    changePageSize,
  };
};
