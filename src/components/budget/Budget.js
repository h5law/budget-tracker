import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectBudgets,
  editBudget,
  removeBudget
} from '../../features/budgets/budgetsSlice.js';

import './Budget.css';

const Budget = ({ budget }) => {
  const [amount, setAmount] = useState(budget.amount);
  const allBudgets = useSelector(selectBudgets);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBudget({...budget, amount: amount}));
  };

  const handleRemove = () => {
    dispatch(removeBudget(budget));
  };

  return (
    <li className="budget-item">
      <div className="budget-info">
        <div>
          <h4 className="category-label">Category</h4>
          <h3 className="category-title">{budget.category}</h3>
        </div>
        <div>
          <button
            className="remove-budget"
            onClick={handleRemove}
          >
            X
          </button>
        </div>
      </div>
      <div className="budget-funds">
        <p>Funds remaining: {budget.amount}</p>
        <form className="edit-funds" onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            value={amount}
            min="0"
            step="0.01"
            onChange={(e) => setAmount(e.currentTarget.value)}
            placeholder="Set Budget"
          />
          <input name="button" type="submit" value="Edit" />
        </form>
      </div>
    </li>
  );
};

export default Budget;
