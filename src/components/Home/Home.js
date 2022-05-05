import React from 'react';
import './Home.css';

import OfferPhoto from '../../assets/offerPicture.jpg';
import ClassesPhoto from '../../assets/gymClasses.jpg';
import PersonalTrainer from '../../assets/personaltrainer2.0.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="offer-container">
        <img className="offer-image" src={OfferPhoto} alt="gym"></img>
        <div className="search-box">Find A club Near You!</div>
        <div className="offer-content">Hurry Now! No Sign Up Fee!</div>
        <div className="offer-logo"></div>
      </div>
      <div className="classes-container">
        <img src={ClassesPhoto} alt="classesPhoto"></img>
        <div className="classes-logo"></div>
        <div className="classes-content">
          <button>Browse Classes</button>
        </div>
        <div className="classes-popup"></div>
      </div>
      <div className="personal-training-container">
        <img src={PersonalTrainer} alt="personaltrainer" />
        <div className="personal-training-content">
          <div className="personal-training-logo"></div>
          <div className="personal-training-description"></div>
          <button>Let's Train</button>
        </div>
      </div>
      <div className="contact-container">
        <img src="/" alt="/" />
        <div className="contact-content"></div>
      </div>
    </div>
  );
};

export default Home;
