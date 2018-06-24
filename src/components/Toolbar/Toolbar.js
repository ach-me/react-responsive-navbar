import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => (
  <header className="Toolbar">
    <nav className="Toolbar-Navigation">
      <div className="Toolbar-ToggleButton">
        <DrawerToggleButton click={props.drawerToggleClickHandler} />
      </div>
      <div className="Logo Toolbar-Logo">
        <a href="/" className="Toolbar-Link Toolbar-Logo-Link">
          The Logo
        </a>
      </div>
      <div className="Toolbar-Spacer" />
      <div className="Toolbar-NavigationItems">
        <ul>
          <li>
            <a href="/" className="Toolbar-Link Toolbar-NavigationItems-Link">
              Products
            </a>
          </li>
          <li>
            <a href="/" className="Toolbar-Link Toolbar-NavigationItems-Link">
              Users
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
