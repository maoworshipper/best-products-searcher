import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResults, addSingleItem } from '@redux/productsSlice';
import { useFetch } from '@hooks/useFetch';
import { Card } from '@components/Card/Card';
import Pagination from '@components/Pagination/Pagination';
import styles from './CardsGrid.module.scss';

const defaultOffset = 50;

const CardsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products) || {};
  const { results, query, paging } = products || {};
  const { data, stream, fetchData } = useFetch();

  const showItem = (id) => {
    console.log(id);
    fetchData(`api/item?query=${id}`, {}, 'item');
  };

  const handleChangePagination = async (page) => {
    console.log(page);
    const offset = (page - 1) * defaultOffset;
    fetchData(`api/search?query=${query}&offset=${offset}`, {}, 'search');
    setCurrentPage(page);
  };

  useEffect(() => {
    if (data && stream === 'search') {
      console.log(data);
      dispatch(addResults(data));
    }

    if (data && stream === 'item') {
      console.log(data);
      dispatch(addSingleItem(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, stream]);

  if (!results) return null;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Resultados de la búsqueda: {`"${query}"`} - {paging?.total} productos
        encontrados
      </h2>
      <div className={styles.cardsGrid}>
        {results?.length > 0
          ? results.map((item) => {
              return <Card key={item.id} handleClick={showItem} {...item} />;
            })
          : null}
      </div>
      {results?.length > 0 && (
        <div className={styles.pagination}>
          <Pagination
            pages={paging?.total}
            currentPage={currentPage}
            onChange={handleChangePagination}
          />
        </div>
      )}
    </div>
  );
};

export default CardsGrid;
