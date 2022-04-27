import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectBudgets, addBudget } from './budgetsSlice.js';
import Budget from '../../components/budget/Budget.js';
import NewTransaction from '../../components/transaction/NewTransaction.js';

import './Budgets.css';

const Budgets = () => {
  const [title, setTitle] = useState("");
  const budgets = useSelector(selectBudgets);
  const dispatch = useDispatch();

  const checkIfExists = () => {
    const categories = budgets.map(budget => budget.category);
    return categories.includes(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBudget(title));
    setTitle('');
  };

  return (
    <div className="page-wrapper">
      <div className="budgets-container">
        <form
          className="add-budget-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            placeholder="Add new Budget"
            required
          />
            <button disabled={checkIfExists()}>Add</button>
        </form>

        <ul className="budgets-wrapper">
          {budgets.map(budget => (
            <Budget
              key={budget.id}
              budget={budget} />
          ))}
          </ul>
      </div>
    </div>
  );
};

export default Budgets;
