import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addResults: (state, action) => {
      state.results = action.payload.results;
      state.query = action.payload.query;
      state.paging = action.payload.paging;
      state.sort = action.payload.sort;
      state.available_filters = action.payload.available_filters;
      state.available_sorts = action.payload.available_sorts;
      state.filters = action.payload.filters;
    },
    addSingleItem: (state, action) => {
      state.item = action.payload;
    },
    removeSingleItem: (state) => {
      state.item = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addToCart: (state, action) => {
      state.cart =
        state?.cart?.length > 0
          ? [...state.cart, action.payload]
          : [action.payload];
    },
  },
});

export const {
  addResults,
  addSingleItem,
  removeSingleItem,
  setCurrentPage,
  addToCart,
} = productsSlice.actions;
export default productsSlice.reducer;
