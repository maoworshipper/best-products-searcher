import { useState, useEffect } from 'react';
import styles from './Pagination.module.scss';

const defaultOffset = 50;

const Pagination = ({ pages, currentPage, onChange }) => {
  const [pagesArray, setPagesArray] = useState([]);

  useEffect(() => {
    const pagesArray = [];
    const totalPages = Math.ceil(pages / defaultOffset);
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    setPagesArray(pagesArray);
  }, [pages]);

  const handleChangePage = (page) => {
    page !== currentPage && onChange(page);
  };

  const prevButtons = () => {
    if (currentPage === 1) return null;
    if (currentPage > 1) {
      return (
        <>
          <button
            className={`${styles.page} ${styles.arrows}`}
            onClick={() => handleChangePage(1)}
            title="Primera página"
            role="button"
          >
            {'<<'}
          </button>
          <button
            className={`${styles.page} ${styles.arrows}`}
            onClick={() => handleChangePage(currentPage - 1)}
            title="Anterior"
          >
            {'<'}
          </button>
        </>
      );
    }
  };

  const nextButtons = () => {
    if (currentPage === pagesArray.length) return null;
    if (currentPage < pagesArray.length) {
      return (
        <>
          <button
            className={`${styles.page} ${styles.arrows}`}
            onClick={() => handleChangePage(currentPage + 1)}
            title="Siguiente"
          >
            {'>'}
          </button>
          <button
            className={`${styles.page} ${styles.arrows}`}
            onClick={() => handleChangePage(pagesArray.length)}
            title="Última página"
          >
            {'>>'}
          </button>
        </>
      );
    }
  };

  return (
    <div className={styles.pagination} role="navigation">
      {prevButtons()}
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
      {nextButtons()}
    </div>
  );
};

export default Pagination;
