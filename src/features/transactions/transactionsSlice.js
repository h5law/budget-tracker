import { createSlice, nanoid } from '@reduxjs/toolkit';

import { CATEGORIES, addBudget, removeBudget } from '../budgets/budgetsSlice.js';

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
        const date = new Date();
        const current = date.toLocaleString();
        return { payload: {
          category,
          transaction: {
            id,
            category,
            amount,
            description,
            dateCreated: current,
          },
        } };
      },
    },
    removeTransaction: (state, action) => {
      const index = state.findIndex(tx => tx.category === action.payload.category);
      state[index].transactions = state[index].transactions.filter(tx => {
        return tx.id !== action.payload.id
      });
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
