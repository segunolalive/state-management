import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ route }) => (
  <li>
    <NavLink to={`/${route}`}>{route.toUpperCase()}</NavLink>
  </li>
);
