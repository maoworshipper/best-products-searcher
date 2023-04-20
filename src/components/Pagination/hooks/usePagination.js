import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const maxItems = 1000; // Max items offset allowed by the API
const defaultOffset = 50;
const maxTotalPages = 20;
const maxPagesToShow = 5;

export const usePagination = () => {
  const [pagesArray, setPagesArray] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { paging, currentPage } = useSelector((state) => state.products) || {};
  const { total, offset } = paging || {};

  const calculatePagesToShow = (allPages) => {
    const pagesToShow = [];
    const finalItem = pagesArray[pagesArray.length - 1];
    /* If the current page is greater than the max total pages, then the initial page will be the max total pages */
    let initialPage = currentPage > maxTotalPages ? maxTotalPages : currentPage;
    /* if initial page is less than the max pages to show, then the initial page will be 1 */
    initialPage =
      initialPage < maxPagesToShow ? 1 : initialPage - maxPagesToShow + 1;
    /* if the current page is the last page in the page array state, then the initial page will be the current page + 1 */
    initialPage = currentPage === finalItem ? initialPage + 1 : initialPage;
    /* if the total pages is less than the max pages to show, then the initial page will be 1 */
    initialPage = allPages <= maxPagesToShow ? 1 : initialPage;

    const lastItem =
      allPages <= maxPagesToShow ? allPages : initialPage + maxPagesToShow - 1;
    const maxPages = lastItem > maxTotalPages ? maxTotalPages : lastItem;

    for (let i = initialPage; i <= maxPages; i++) {
      pagesToShow.push(i);
    }
    return pagesToShow;
  };

  useEffect(() => {
    const realItems = total > maxItems ? maxItems : total;
    const allPages = Math.ceil(realItems / defaultOffset);
    const pagesToShow = calculatePagesToShow(allPages);
    setPagesArray(pagesToShow);
    setTotalPages(allPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, offset]);

  return {
    pagesArray,
    totalPages,
  };
};
