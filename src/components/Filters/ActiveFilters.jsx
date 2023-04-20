import { useSelector } from 'react-redux';
import { useFilters } from './hooks/useFilters';
import styles from './Filters.module.scss';

export const ActiveFilters = () => {
  const { filters } = useSelector((state) => state.products) || {};
  const { removeFilter } = useFilters();

  const renderFilterOptions = (filter) => {
    return filter.values.map((value) => (
      <div className={styles.activeFilterContainer} key={value.id}>
        <span className={styles.results}>{value.name}</span>
        <span
          className={styles.deleteFilter}
          title="Eliminar filtro"
          onClick={() => removeFilter(filter.id, value.id)}
        />
      </div>
    ));
  };

  if (!filters?.length) return null;

  return (
    <>
      <div className={`${styles.filter} ${styles.activeFilters}`}>
        <h4 className={styles.name}>Filtros activos</h4>
        <div className={styles.valuesContainer}>
          {filters.map((filter) => (
            <div key={filter.id}>
              <h4 className={styles.name}>{filter.name}</h4>
              <ul className={`${styles.value} ${styles.active}`}>
                <li className={styles.nameValue}>
                  {renderFilterOptions(filter)}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className={styles.separator} />
    </>
  );
};
