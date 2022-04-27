import { useSelector } from 'react-redux';

import Transaction from '../../components/transaction/Transaction.js';
import NewTransaction from '../../components/transaction/NewTransaction.js';
import { selectTransactions, selectTransactionsByCategory } from './transactionsSlice.js';

const Transactions = () => {
  const transactions = useSelector(selectTransactions);
  const newestFirst = transactions.map(i => i);
  newestFirst.sort((a, b) => {
    if (a.dateCreated === b.dateCreated) return 0;
    return (a.dateCreated < b.dateCreated) ? 1 : -1
  });

  return (
    <div className="page-wrapper">
      <NewTransaction />
      <ul className="transactions-container">
        {(newestFirst.length > 0) && newestFirst.map(tx => (
          <Transaction tx={tx} key={tx.id} />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
