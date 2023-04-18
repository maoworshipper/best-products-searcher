import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResults } from '@redux/productsSlice';
import { BuildFilters } from './BuildFilters';
import { useFetch } from '@hooks/useFetch';
import styles from './Filters.module.scss';

const Filters = () => {
  const dispatch = useDispatch();
  const { available_filters, query } = useSelector((state) => state.products) || {};
  const [filters, setFilters] = useState([]);
  const { data, stream, fetchData } = useFetch();

  useEffect(() => {
    const newFilters = available_filters.filter((filter) => {
      return filter.id !== 'product';
    });
    setFilters(newFilters);
  }, [available_filters]);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const handleFilter = (filterId, valueId) => {
    const url = `api/search?query=${query}&filters=${filterId}&filter=${valueId}`;
    fetchData(url, {}, 'search');
  };

  useEffect(() => {
    if (data && stream === 'search') {
      console.log(data);
      dispatch(addResults(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, stream]);

  return (
    <div className={styles.filters}>
      {filters?.length > 0 &&
        filters.map((filter) => (
          <div className={styles.filter} key={filter.id}>
            <h4 className={styles.name}>{filter.name}</h4>
            <div className={styles.valuesContainer}>
              {filter.values.map((value) => (
                <ul
                  className={styles.value}
                  key={value.id}
                  onClick={() => handleFilter(filter.id, value.id)}
                >
                  <li className={styles.nameValue}>
                    {value.name}
                    <span
                      className={styles.results}
                    >{` (${value.results})`}</span>
                  </li>
                  {/* <span className={styles.results}>{value.results}</span> */}
                </ul>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Filters;
