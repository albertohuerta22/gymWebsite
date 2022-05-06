import React from 'react';
import './Home.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination } from 'swiper';

import Pic1 from '../../assets/offerPicture.jpg';
import Pic2 from '../../assets/gymClasses.jpg';
import Pic3 from '../../assets/personaltrainer2.0.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="offer-container">
        <img className="offer-image" src={Pic3} alt="gym"></img>
        <div className="search-box">Find A club Near You!</div>
        <div className="offer-content">Hurry Now! No Sign Up Fee!</div>
        <div className="offer-logo"></div>
      </div>
      <div className="classes-container">
        <img src={Pic3} alt="classesPhoto"></img>
        <div className="classes-logo"></div>
        <Swiper
          modules={[Navigation, EffectFade, Pagination]}
          // autoHeight={true}
          navigation
          // effect={'fade'}
          speed={800}
          slidesPerView={1}
          loop
          className="myswiper"
          pagination
        >
          <SwiperSlide className="swiperslide">
            <img src={Pic1} alt="/" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pic2} alt="/" className="swiperslide" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Pic3} alt="/" className="swiperslide" />
          </SwiperSlide>
        </Swiper>
        <div className="classes-content">
          <button>Browse Classes</button>
        </div>
        <div className="classes-popup"></div>
      </div>
      <div className="personal-training-container">
        <img src={Pic3} alt="personaltrainer" />
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
