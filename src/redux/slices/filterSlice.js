import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: [
      { AC: false },
      { transmission: '' },
      { kitchen: false },
      { TV: false },
      { bathroom: false },
      { form: '' },
      { location: '' },
    ],
  },
  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.filters = state.filters.map(item =>
        key in item ? { [key]: value } : item
      );
    },
    resetFilters: (state) => {
      state.filters = state.filters.map(item => {
        const key = Object.keys(item)[0];
        return { [key]: key === 'AC' || key === 'kitchen' || key === 'TV' || key === 'bathroom' ? false : '' };
      });
    },
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
