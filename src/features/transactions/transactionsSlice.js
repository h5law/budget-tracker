import { createSlice, createSelector, nanoid } from '@reduxjs/toolkit';

import { removeBudget } from '../budgets/budgetsSlice.js';

const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState: [],
  reducers: {
    addTransaction: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (category, amount, description) => {
        return { payload: {
          id: nanoid(),
          category,
          amount,
          description,
          dateCreated: Date.now(),
        } };
      },
    },
    removeTransaction: (state, action) => {
      return state.filter(tx => tx.id !== action.payload.id);
    },
    editTransaction: (state, action) => {
      const index = state.findIndex(tx => tx.id === action.payload.id);
      state[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeBudget, (state, action) => {
      return state.filter(tx => tx.category !== action.payload.category);
    });
  },
});

export const selectTransactions = (state) => state.transactions;

export const {
  addTransaction,
  removeTransaction,
  editTransaction
} = transactionsSlice.actions;
export default transactionsSlice.reducer;
