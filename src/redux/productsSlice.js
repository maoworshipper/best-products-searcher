import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  results: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addQuery: (state, action) => {
      state.query = action.payload;
    },
    addResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { addQuery, addResults } = productsSlice.actions;
export default productsSlice.reducer;
