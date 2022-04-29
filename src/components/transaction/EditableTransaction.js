import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  editTransaction,
  removeTransaction
} from '../../features/transactions/transactionsSlice.js';
import { selectBudgets } from '../../features/budgets/budgetsSlice.js';

import './EditableTransaction.css';

const Transaction = ({ tx }) => {
  const [description, setDescription] = useState(tx.description);
  const [amount, setAmount] = useState(tx.amount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (amount !== tx.amount || description !== tx.description) {
      dispatch(editTransaction({
        old: {...tx},
        new: {
          ...tx,
          amount,
          description
        }
      }));
    }
  }, [amount, description]);

  const handleRemove = () => {
    dispatch(removeTransaction(tx));
  };

  const convertDate = () => {
    const date = new Date(tx.dateCreated);
    return date.toLocaleString();
  };

  return (
    <li className="etx-card">
      <div className="etx-labels">
        <h4 className="label">Description</h4>
        <input
          className="input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
      </div>
      <div className="etx-amount">
        <h4 className="label">Amount:</h4>
        <input
          className="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.currentTarget.value)}
        />
      </div>
      <div className="etx-date">
        <h4 className="label">Created:</h4>
        <h3 className="value">{convertDate()}</h3>
      </div>
      <div>
        <button
          className="remove-transaction"
          onClick={handleRemove}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default Transaction;

