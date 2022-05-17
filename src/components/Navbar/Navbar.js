import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);

  // const handleClick = () => setNav(!nav);
  const changeColor = () => {
    window.scrollY ? setColor(true) : setColor(false);
  };

  window.addEventListener('scroll', changeColor);

  return (
    <div className={!color ? 'navbar-container' : 'navbar-container-alt'}>
      <div className="navbar-logo">
        <Link to="/home">CITY HEALTH CLUB</Link>
      </div>
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
