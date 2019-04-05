import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

import logo from '../../public/images/header-logo.png';
import headerImage from '../../public/images/header-image.jpg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-image">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
