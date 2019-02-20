import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Images/logo.png';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} alt="nasnav" />
        <div className="navs">
          <Link to="/navbox">NavBox</Link>
          <Link to="/navstyle">NavStyle</Link>
          <Link to="/shopping">Shopping</Link>
          <Link to="/360editor">360 Editor</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <button className="btn">Get Started</button>
      </div>
    );
  }
}

export default Header;
