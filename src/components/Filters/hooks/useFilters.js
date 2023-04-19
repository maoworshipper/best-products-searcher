import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResults, setCurrentPage } from '@redux/productsSlice';
import { useFetch } from '@hooks/useFetch';
import { buildFiltersUrl } from '@utils/buildFiltersUrl';

export const useFilters = () => {
  const dispatch = useDispatch();
  const { available_filters, filters, query } =
    useSelector((state) => state.products) || {};
  const [filtersOptions, setFiltersOptions] = useState([]);
  const { data, stream, fetchData } = useFetch();

  const handleFilter = (filterId, valueId) => {
    const filtersUrl = buildFiltersUrl(filters);
    fetchData(`api/search?q=${query}&${filterId}=${valueId}${filtersUrl}`);
  };

  const removeFilter = (filterId, valueId) => {
    const newFilters = filters.filter((filter) => filter.id !== filterId);
    const filtersUrl = buildFiltersUrl(newFilters);
    fetchData(`api/search?q=${query}${filtersUrl}`);
  };

  /* Remove product filter from filters options */
  useEffect(() => {
    const newFilters = available_filters.filter((filter) => {
      return filter.id !== 'product';
    });
    setFiltersOptions(newFilters);
  }, [available_filters]);

  useEffect(() => {
    if (data && stream === 'search') {
      dispatch(addResults(data));
      dispatch(setCurrentPage(1));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, stream]);

  return {
    filtersOptions,
    handleFilter,
    removeFilter,
  };
};
