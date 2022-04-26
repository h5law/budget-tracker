import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategories } from '../../features/budgets/budgetsSlice.js';
import { addTransaction } from '../../features/transactions/transactionsSlice.js';

import './NewTransaction.css';

const NewTransaction = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction(category, amount, description))
    setAmount(0);
    setDescription('');
  };

  const handleChange = ({ target }) => {
    setCategory(target.value);
  };

  return (
    <div className="new-transaction">
      <form
        className="create-transaction"
        onSubmit={handleSubmit}
      >
        <select
          name="categories"
          id="categories"
          onChange={handleChange}
          value={category}
          required
        >
          {categories.map(category => (
            <option value={category} key={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <input
          name="amount"
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
          required
          placeholder="Enter amount"
        />
        <input
          name="description"
          type="text"
          max-length="32"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          placeholder="Enter description"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewTransaction;
