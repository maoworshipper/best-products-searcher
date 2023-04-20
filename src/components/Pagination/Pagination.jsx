import { useSelector } from 'react-redux';
import { usePagination } from './hooks/usePagination';
import styles from './Pagination.module.scss';

const Pagination = ({ onChange }) => {
  const { currentPage } = useSelector((state) => state.products) || {};
  const { pagesArray, totalPages } = usePagination() || {};

  const handleChangePage = (page) => {
    page !== currentPage && onChange(page);
  };

  const arrows = {
    first: {
      title: 'Primera página',
      arrow: '<<',
      payload: 1,
      validation: currentPage !== 1 && currentPage > 1,
    },
    prev: {
      title: 'Anterior',
      arrow: '<',
      payload: currentPage - 1,
      validation: currentPage !== 1 && currentPage > 1,
    },
    next: {
      title: 'Siguiente',
      arrow: '>',
      payload: currentPage + 1,
      validation: currentPage !== totalPages && currentPage < totalPages,
    },
    last: {
      title: 'Última página',
      arrow: '>>',
      payload: totalPages,
      validation: currentPage !== totalPages && currentPage < totalPages,
    },
  };

  const renderArrows = (type) => {
    const arrow = arrows[type];
    return arrow.validation ? (
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
      {pagesArray?.map((page) => {
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
