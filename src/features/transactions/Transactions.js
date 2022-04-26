import { useSelector } from 'react-redux';

import Transaction from '../../components/transaction/Transaction.js';
import NewTransaction from '../../components/transaction/NewTransaction.js';
import { selectTransactions } from './transactionsSlice.js';

const Transactions = () => {
  const transactionsState = useSelector(selectTransactions);
  const transactions = transactionsState.map(tx => tx.transactions).flat();

  return (
    <div className="page-wrapper">
      <NewTransaction />
      <ul className="transactions-container">
        {transactions.map(tx => (<Transaction tx={tx} key={tx.id} />))}
      </ul>
    </div>
  );
};

export default Transactions;
