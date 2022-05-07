import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">LOGO</div>
      <div className="link-container">
        <Link className="links" to="/home">
          Home
        </Link>
        <Link className="links" to="/clubs">
          Search Clubs
        </Link>
        <Link className="links" to="/classes">
          Classes
        </Link>
        <Link className="links" to="/personaltraining">
          Personal Training
        </Link>
        <Link className="links" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
