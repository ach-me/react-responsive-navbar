import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
  const drawerClasses = ['SideDrawer'];
  if (props.show) {
    drawerClasses.push('SideDrawer_Open');
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <ul className="SideDrawer-List">
        <li className="SideDrawer-List-Item">
          <a href="/" className="SideDrawer-List-Item-Link">
            Products
          </a>
        </li>
        <li className="SideDrawer-List-Item">
          <a href="/" className="SideDrawer-List-Item-Link">
            Users
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
