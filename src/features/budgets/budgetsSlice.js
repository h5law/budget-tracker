import { createSlice, nanoid } from '@reduxjs/toolkit';

import { addTransaction } from '../transactions/transactionsSlice.js';

const CATEGORIES = [
  'housing',
  'food',
  'personal',
  'travel'
];

const budgetsSlice = createSlice({
  name: 'budgetsSlice',
  initialState: CATEGORIES.map(category => ({
    id: nanoid(),
    category,
    amount: 0,
    remaining: 0
  })),
  reducers: {
    addBudget: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (category) => {
        return { payload: {
          id: nanoid(),
          category,
          amount: 0,
          remaining: 0
        } };
      },
    },
    removeBudget: (state, action) => {
      return state.filter(budget => budget.id !== action.payload.id)
    },
    editBudget: (state, action) => {
      const index = state.findIndex(budget => budget.id === action.payload.id);
      const oldState = Object.assign({}, state[index]);
      state[index].amount = action.payload.amount;
      state[index].remaining = state[index].remaining
                             + (Number(action.payload.amount) - oldState.amount);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTransaction, (state, action) => {
      const index = state.findIndex(budget => budget.category === action.payload.category);
      state[index].remaining = state[index].remaining - Number(action.payload.amount);
    });
  },
});

export const selectBudgets = (state) => state.budgets;
export const selectCategories = (state) => {
  return state.budgets.map(budget => budget.category);
};

export const { addBudget, removeBudget, editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
