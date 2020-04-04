import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

import logo from '../../public/images/header-logo.png';

const Nav = () => {
  return (
    <div className="topbar-container">
      <div className="logo-container">
        <NavLink exact to="/" className="nav-item">
          <img src={`/${logo}`} alt="INTERACTIVE DISCO" />
        </NavLink>
      </div>
      <div className="nav-container">
        <div>
          <NavLink exact to="/" className="nav-item">
            WORK
          </NavLink>
        </div>
        {/* <div>
          <NavLink to="/reel" className="nav-item">
            REEL
          </NavLink>
        </div> */}
        <div>
          <NavLink to="/about" className="nav-item">
            ABOUT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
