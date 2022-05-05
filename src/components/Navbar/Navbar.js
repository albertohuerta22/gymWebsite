import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Navbar>
        <Link to="/home">Home</Link>
        <Link to="/clubs">Find a Club</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/personaltraining">Personal Training</Link>
        <Link to="/contact">Contact</Link>
      </Navbar>
    </div>
  );
};

export default Navbar;
