import React from 'react';
import './Home.scss';
import Pic1 from '../../assets/offerPicture.jpg';
import Pic2 from '../../assets/gymClasses.jpg';
import Pic3 from '../../assets/personaltrainer2.0.jpg';

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="home-container">
      <div className="carousel">
        <Carousel variant="light">
          <Carousel.Item>
            <img
              className="d-block w-100 object-top flex"
              src={Pic1}
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100  object-bottom bg-bottom"
              src={Pic2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 object-bottom"
              src={Pic3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="classes-container">
        <p>Curious About Our Classes?</p>
      </div>
      <div className="story">
        <h1>Above The Rest</h1>
        <p>
          We provide the dicipline and attention needed to reach your personal
          goals.
        </p>
        <button>Our Story</button>
      </div>
    </div>
  );
};

export default Home;
