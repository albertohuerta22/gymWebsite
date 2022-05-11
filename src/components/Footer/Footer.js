import React from 'react';

import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links-container">
        <div className="about-container">
          <h2>About</h2>
          <p>Careers</p>
          <p>Personal Training</p>
          <p>Core Values</p>
          <p>Contact Us</p>
          <p>Member Policies</p>
        </div>
        <div className="brand-container">
          <h2>Our Brands</h2>
          <p>Pure Health</p>
          <p>City Health Plus</p>
          <p>City Health Run Club</p>
        </div>
      </div>
      <div className="social-container">
        <div className="social-contents">
          <FaFacebook className="social-link" />
          <FaTwitter className="social-link" />
          <FaYoutube className="social-link" />
          <FaInstagram className="social-link" />
        </div>
      </div>
      <div className="site-settings"></div>
    </div>
  );
};

export default Footer;
