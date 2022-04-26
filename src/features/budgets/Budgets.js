import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectBudgets, addBudget } from './budgetsSlice.js';
import Budget from '../../components/budget/Budget.js';

import './Budgets.css';

const Budgets = () => {
  const [title, setTitle] = useState("");
  const budgets = useSelector(selectBudgets);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBudget(title));
  };

  return (
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
        <input type="submit" value="Add" />
      </form>

      <ul className="budgets-wrapper">
        {budgets.map(budget => (
          <Budget
            key={budget.id}
            budget={budget} />
        ))}
        </ul>
    </div>
  );
};

export default Budgets;
