export const buildFiltersUrl = (filtersData) => {
    const allFilters = filtersData
      .map((filter) => {
        const filterValue = filter.values.map((value) => {
          return value.id;
        });
        return `&${filter.id}=${filterValue}`;
      })
      .join('');
    return allFilters;
  };