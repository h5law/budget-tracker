import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <h3>Budget Tracker</h3>
      </div>
      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/budgets">Budgets</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/transactions">Transactions</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
