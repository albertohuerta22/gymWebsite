import React from 'react';
import './Home.scss';
import Pic1 from '../../assets/offerPicture.jpg';
import Pic2 from '../../assets/gymClasses.jpg';
import Pic3 from '../../assets/personaltrainer2.0.jpg';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className="home-container">
      <div className="carousel">
        <Carousel variant="light">
          <Carousel.Item>
            <div className="overlay"></div>
            <img
              className="d-block w-100 object-top flex"
              src={Pic1}
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h5>Hurry now for exclusive offers!</h5>
              <p>Act now and enjoy no signing fee.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay"></div>
            <img
              className="d-block w-100  object-bottom bg-bottom"
              src={Pic2}
              alt="Second slide"
            />
            <Carousel.Caption className="caption">
              <h5>Members can enjoy unique benefits.</h5>
              <p>City Health Club members have access to all city gyms.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay"></div>
            <img
              className="d-block w-100 object-bottom"
              src={Pic3}
              alt="Third slide"
            />
            <Carousel.Caption className="caption">
              <h5>Visit our Shop</h5>
              <p>Prices are 20% site wide, members get additional 10%.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="classes-container">
        <div className="classes-container-left">Curious About Our Classes?</div>
        <div className="classes-container-right">
          Classes designed for your needs and your schedule. We have an array of
          instructors ready to prepare you for your next chapter.
        </div>
      </div>
      <div className="story">
        <h1>Above The Rest</h1>
        <p>
          We provide the dicipline and attention needed to reach your personal
          goals.
        </p>
        <Button variant="dark">Our Story</Button>
      </div>
    </div>
  );
};

export default Home;
