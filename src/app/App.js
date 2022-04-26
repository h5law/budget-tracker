import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

import Header from '../components/header/Header.js';
import Budgets from '../features/budgets/Budgets.js';
import Transactions from '../features/transactions/Transactions.js';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/budgets"
          element={<Budgets />}
          />
          <Route
            path="/transactions"
          element={<Transactions />}
          />
          <Route
            path="/"
            element={<Navigate to="/budgets" replace />}
          />
          <Route
            path="*"
            element=""
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
