import React from 'react';
import { Link } from 'react-router-dom';

export default ({ route }) => (
  <li>
    <Link to={`/${route}`}>{route.toUpperCase()}</Link>
  </li>
);
