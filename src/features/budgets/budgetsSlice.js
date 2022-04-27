import { createSlice, nanoid } from '@reduxjs/toolkit';

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
    amount: 0
  })),
  reducers: {
    addBudget: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (category) => {
        return { payload: { id: nanoid(), category, amount: 0 } };
      },
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
export const selectCategories = (state) => {
  return state.budgets.map(budget => budget.category);
};

export const { addBudget, removeBudget, editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
