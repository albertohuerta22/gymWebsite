import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/home">Home</Link>
      <Link to="/clubs">Find a Club</Link>
      <Link to="/classes">Classes</Link>
      <Link to="/personaltraining">Personal Training</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
