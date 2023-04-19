import { useFilters } from './hooks/useFilters';
import { ActiveFilters } from './ActiveFilters';
import styles from './Filters.module.scss';

const Filters = () => {
  const { filtersOptions, handleFilter } = useFilters();

  const renderFilterOptions = (filter) => {
    return filter.values.map((value) => (
      <ul
        className={styles.value}
        key={value.id}
        onClick={() => handleFilter(filter.id, value.id)}
      >
        <li className={styles.nameValue}>
          {value.name}
          <span className={styles.results}>{` (${value.results})`}</span>
        </li>
      </ul>
    ));
  };

  return (
    <div className={styles.filters}>
      <ActiveFilters />
      {filtersOptions?.length > 0 &&
        filtersOptions.map((filter) => (
          <div className={styles.filter} key={filter.id}>
            <h4 className={styles.name}>{filter.name}</h4>
            <div className={styles.valuesContainer}>
              {renderFilterOptions(filter)}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Filters;
