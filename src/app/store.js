import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import budgetsSlice from '../features/budgets/budgetsSlice.js';
import transactionsSlice from '../features/transactions/transactionsSlice.js';

const reducers = combineReducers({
  budgets: budgetsSlice,
  transactions: transactionsSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_END !== 'production',
  middleware: [thunk],
});

export default store;
