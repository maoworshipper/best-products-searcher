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
    }
  },
});

export const { addResults, addSingleItem } = productsSlice.actions;
export default productsSlice.reducer;
