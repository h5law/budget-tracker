import { createSlice, nanoid } from '@reduxjs/toolkit';

export const CATEGORIES = [
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
    amount: 0
  })),
  reducers: {
    addBudget: (state, action) => {
      state.push({ id: nanoid(), category: action.payload, amount: 0 });
    },
    removeBudget: (state, action) => {
      return state.filter(budget => budget.id !== action.payload.id)
    },
    editBudget: (state, action) => {
      const index = state.findIndex(budget => budget.id === action.payload.id);
      state[index].amount = action.payload.amount
    },
  },
});

export const selectBudgets = (state) => state.budgets;
export const { addBudget, removeBudget, editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
