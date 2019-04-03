import React from 'react';
import './Header.css';

import logo from '../../public/images/header-logo.png';
import headerImage from '../../public/images/header-image.jpg';

export default function Header() {
  return (
    <div className="header-container">
      <div className="topbar-container">
        <div className="logo-container">
          <img src={logo} alt="INTERACTIVE DISCO" />
        </div>
        <div className="nav-container">
          <div className="nav-item">WORK</div>
          <div className="nav-item">REEL</div>
          <div className="nav-item">ABOUT</div>
        </div>
      </div>
      <div className="header-image">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
}
