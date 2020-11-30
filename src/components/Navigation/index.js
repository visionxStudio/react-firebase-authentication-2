import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import './Navigation.css';

const Navigation = () => (
  <div className="Navigation">
    <ul className="Navigation__items">
      <li className="Navigation__item">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li className="Navigation__item">
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li className="Navigation__item">
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li className="Navigation__item">
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li className="Navigation__item">
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </div>
);
 
export default Navigation;