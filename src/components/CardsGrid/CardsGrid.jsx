import { useSelector } from 'react-redux';
import { useCardsGrid } from './hooks/useCardsGrid';
import { formatNumber } from '@utils/formatNumber';
import { Card } from '@components/Card/Card';
import Pagination from '@components/Pagination/Pagination';
import styles from './CardsGrid.module.scss';

const CardsGrid = () => {
  const products = useSelector((state) => state.products) || {};
  const { results, query, paging, currentPage } = products || {};
  const { showItem, handleChangePagination } = useCardsGrid();

  const renderCards = () => {
    return results?.length > 0
      ? results.map((item) => (
          <Card key={item.id} handleClick={showItem} {...item} />
        ))
      : null;
  };

  const renderPagination = () => {
    return results?.length > 0 ? (
      <div className={styles.pagination}>
        <Pagination
          onChange={handleChangePagination}
        />
      </div>
    ) : null;
  };

  if (!results) return null;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.search}>
          {formatNumber(paging?.total)} resultados
        </p>
        <p className={styles.results}>Búsqueda: {query}</p>
      </div>
      <div className={styles.cardsGrid}>{renderCards()}</div>
      {renderPagination()}
    </div>
  );
};

export default CardsGrid;
