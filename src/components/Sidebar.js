import React from 'react';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';
import { Consumer } from './state';

const Sidebar = () => (
  <aside className="sidebar">
    <nav role="navigation">
      <li>
        <Link to="/">HOME</Link>
      </li>
      <NavigationLink route={''} />
      <Consumer>
        {routes =>
          Object.keys(routes).map(route => (
            <NavigationLink route={route} key={route} />
          ))
        }
      </Consumer>
    </nav>
  </aside>
);

export default Sidebar;
