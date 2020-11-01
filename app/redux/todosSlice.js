import {createSelector, createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;

const getCounter = createSelector(
  [(state) => state.counter],
  (counter) => counter,
);

export const counterSelector = {getCounter};
