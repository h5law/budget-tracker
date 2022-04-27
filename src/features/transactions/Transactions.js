import { useSelector } from 'react-redux';

import Transaction from '../../components/transaction/Transaction.js';
import NewTransaction from '../../components/transaction/NewTransaction.js';
import { selectTransactions, selectTransactionsByCategory } from './transactionsSlice.js';

const Transactions = () => {
  const transactions = useSelector(selectTransactions);

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
