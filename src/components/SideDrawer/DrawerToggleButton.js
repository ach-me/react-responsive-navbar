import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
  <button className="ToggleButton" onClick={props.click}>
    <div className="ToggleButton-Line" />
    <div className="ToggleButton-Line" />
    <div className="ToggleButton-Line" />
  </button>
);

export default DrawerToggleButton;
