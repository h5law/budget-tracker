import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';

import Header from '../components/header/Header.js';
import Budgets from '../features/budgets/Budgets.js';

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
            element=""
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
