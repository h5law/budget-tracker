import { configureStore } from '@reduxjs/toolkit';

import budgetsSlice from '../features/budgets/budgetsSlice.js';
import transactionsSlice from '../features/transactions/transactionsSlice.js';

const store = configureStore({
  reducer: {
    budgets: budgetsSlice,
    transactions: transactionsSlice,
  }
});

export default store;
