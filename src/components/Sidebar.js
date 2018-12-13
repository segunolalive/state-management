import React from 'react';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';

const Sidebar = ({ routes }) => (
  <aside className="sidebar">
    <nav role="navigation">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <NavigationLink route={''} />
      {routes.map(route => (
        <NavigationLink route={route} key={route} />
      ))}
    </nav>
  </aside>
);

export default Sidebar;
