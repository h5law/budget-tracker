import { createSlice, nanoid } from '@reduxjs/toolkit';

import { addBudget, removeBudget } from '../budgets/budgetsSlice.js';

const CATEGORIES = [
  'housing',
  'food',
  'personal',
  'travel'
];

const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState: CATEGORIES.map(category => ({
    category,
    transactions: []
  })),
  reducers: {
    addTransaction: {
      reducer: (state, action) => {
        const index = state.findIndex(tx => tx.category === action.payload.category);
        state[index].transactions.push(action.payload.transaction);
      },
      prepare: (category, amount, description) => {
        const id = nanoid();
        return { payload: {
          id,
          amount,
          category,
          description,
        } };
      },
    },
    removeTransaction: (state, action) => {
      const index = state.findIndex(tx => tx.category === action.payload.category);
      state[index].transactions.filter(tx => tx.id !== action.payload.tx.id);
    },
    editTransaction: (state, action) => {
      const index = state.findIndex(tx => tx.category === action.payload.category);
      const toEdit = state[index].transactions.findIndex(tx => tx.id === action.payload.id);
      state[index].transactions[toEdit] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBudget, (state, action) => {
      state.push({category: action.payload, transactions: []});
    });
    builder.addCase(removeBudget, (state, action) => {
      return state.filter(budget => budget.category !== action.payload.category);
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
