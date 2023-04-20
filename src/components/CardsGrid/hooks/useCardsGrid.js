/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addResults,
  addSingleItem,
  setCurrentPage,
} from '@redux/productsSlice';
import { useFetch } from '@hooks/useFetch';
import { buildFiltersUrl, scrollToTop } from '@utils/index';

export const useCardsGrid = () => {
  const dispatch = useDispatch();
  const { filters, results, query } =
    useSelector((state) => state.products) || {};
  const { data, stream, fetchData } = useFetch();

  const defaultOffset = 50;

  /* Call API to get item details */
  const showItem = async (id) => {
    fetchData(`api/item?q=${id}`, {}, 'item');
  };

  const handleChangePagination = async (page) => {
    const offset = page > 20 ? 1000 : (page - 1) * defaultOffset;
    const realPage = page > 20 ? 20 : page;
    const filtersUrl = buildFiltersUrl(filters);
    fetchData(`api/search?q=${query}&offset=${offset}${filtersUrl}`);
    dispatch(setCurrentPage(realPage));
  };

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, []);

  useEffect(() => {
    data && stream === 'search' && dispatch(addResults(data));
    data && stream === 'item' && dispatch(addSingleItem(data));
  }, [data, stream]);

  useEffect(() => {
    scrollToTop();
  }, [results]);

  return {
    showItem,
    handleChangePagination,
  };
};
