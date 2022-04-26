import { configureStore } from '@reduxjs/toolkit';

import budgetsSlice from '../features/budgets/budgetsSlice.js';

const store = configureStore({
  reducer: {
    budgets: budgetsSlice,
  }
});

export default store;
