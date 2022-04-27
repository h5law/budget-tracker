import { useDispatch } from 'react-redux';

import { removeTransaction } from '../../features/transactions/transactionsSlice.js';

import './Transaction.css';

const Transaction = ({ tx }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTransaction(tx));
  };

  return (
    <li className="transaction-card">
      <div className="transaction-labels">
        <h4 className="label">{tx.category}</h4>
        <h3 className="value">{tx.description}</h3>
      </div>
      <div className="transaction-amount">
        <h4 className="label">Amount:</h4>
        <h3 className="value">{tx.amount}</h3>
      </div>
      <div className="transaction-date">
        <h4 className="label">Created:</h4>
        <h3 className="value">{tx.dateCreated}</h3>
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
