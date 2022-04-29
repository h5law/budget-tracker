import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { selectBudgets } from '../budgets/budgetsSlice.js';
import { selectTransactions } from '../transactions/transactionsSlice.js';

import EditableTransaction from '../../components/transaction/EditableTransaction.js';

import './Category.css';

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const allBudgets = useSelector(selectBudgets);
  const [ budget ] = allBudgets.filter(budget => budget.category === category);

  const allTransactions = useSelector(selectTransactions);
  const transactions = allTransactions.filter(tx => tx.category === category);
  const newestFirst = transactions.map(i => i);
  newestFirst.sort((a, b) => {
    if (a.dateCreated === b.dateCreated) return 0;
    return (a.dateCreated < b.dateCreated) ? 1 : -1
  });

  return (
    <div className="category-wrapper">
      <button
        className="back-arrow"
        onClick={() => navigate(-1)}
      >
        &#11013;
      </button>
      <div className="category-title">
        <h2>{budget.category}</h2>
      </div>
      <div className="category-info">
        <h4>Funds Remaining: {budget.remaining}</h4>
        <h4>Total Budget: {budget.amount}</h4>
      </div>
      <div className="category-transactions">
        <ul className="tx-wrapper">
          {newestFirst.map(tx => <EditableTransaction tx={tx} key={tx.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default Category;
