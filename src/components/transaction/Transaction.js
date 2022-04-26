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
      <div className="transaction-info">
        <div className="transaction-labels">
          <h4>{tx.category}</h4>
          <h3>{tx.description}</h3>
        </div>
        <div>
          <button
            className="remove-transaction"
            onClick={handleRemove}
          >
            X
          </button>
        </div>
      </div>
      <div className="transaction-amount">
        <p>Amount: {tx.amount}</p>
      </div>
      <div className="transaction-date">
        <p>{tx.dateCreated}</p>
      </div>
    </li>
  );
};

export default Transaction;
