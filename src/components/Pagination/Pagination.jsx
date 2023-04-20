import { useState, useEffect } from 'react';
import styles from './Pagination.module.scss';

const maxItems = 1000;
const defaultOffset = 50;
const maxTotalPages = 20;
const maxPagesToShow = 5;

const calculatePagesToShow = (
  currentPage,
  pagesArray,
  allPages,
  maxTotalPages,
  maxPagesToShow,
) => {
  const pagesToShow = [];
  /* If the current page is greater than the max total pages, then the initial page will be the max total pages */
  let initialPage = currentPage > maxTotalPages ? maxTotalPages : currentPage;
  /* if initial page is less than the max pages to show, then the initial page will be 1 */
  initialPage =
    initialPage < maxPagesToShow ? 1 : initialPage - maxPagesToShow + 1;
  /* if the current page is the last page in the page array state, then the initial page will be the current page + 1 */
  initialPage =
    currentPage === pagesArray[pagesArray.length - 1]
      ? initialPage + 1
      : initialPage;
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

const Pagination = ({ pages, currentPage, offset, onChange }) => {
  const [pagesArray, setPagesArray] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const realItems = pages > maxItems ? maxItems : pages;
    const allPages = Math.ceil(realItems / defaultOffset);
    const pagesToShow = calculatePagesToShow(
      currentPage,
      pagesArray,
      allPages,
      maxTotalPages,
      maxPagesToShow,
    );
    setPagesArray(pagesToShow);
    setTotalPages(allPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, offset]);

  const handleChangePage = (page) => {
    page !== currentPage && onChange(page);
  };

  const arrows = {
    first: {
      title: 'Primera página',
      arrow: '<<',
      payload: 1,
    },
    prev: {
      title: 'Anterior',
      arrow: '<',
      payload: currentPage - 1,
    },
    next: {
      title: 'Siguiente',
      arrow: '>',
      payload: currentPage + 1,
    },
    last: {
      title: 'Última página',
      arrow: '>>',
      payload: totalPages,
    },
  };

  const validations = {
    first: currentPage !== 1 && currentPage > 1,
    prev: currentPage !== 1 && currentPage > 1,
    next: currentPage !== totalPages && currentPage < totalPages,
    last: currentPage !== totalPages && currentPage < totalPages,
  };

  const renderArrows = (type) => {
    const arrow = arrows[type];
    return validations[type] ? (
      <button
        className={`${styles.page} ${styles.arrows}`}
        onClick={() => handleChangePage(arrow.payload)}
        title={arrow.title}
      >
        {arrow.arrow}
      </button>
    ) : null;
  };

  return (
    <div className={styles.pagination} role="navigation">
      {renderArrows('first')}
      {renderArrows('prev')}
      {pagesArray.map((page) => {
        return (
          <button
            key={`pagination-${page}`}
            className={`${styles.page} ${
              page === currentPage ? styles.currentPage : ''
            }`}
            onClick={() => handleChangePage(page)}
          >
            {page}
          </button>
        );
      })}
      {renderArrows('next')}
      {renderArrows('last')}
    </div>
  );
};

export default Pagination;
