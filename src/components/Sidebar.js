import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ routes }) => (
  <aside className="sidebar">
    <nav role="navigation">
      <li>
        <Link to="/">HOME</Link>
      </li>
      {routes.map(route => (
        <li key={route}>
          <Link to={`/${route}`}>{route.toUpperCase()}</Link>
        </li>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
