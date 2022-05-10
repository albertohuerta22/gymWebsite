import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { setSingleTrainer } from '../../store/trainers';
import { supabase } from '../../supabaseClient';

import './PersonalTraining.scss';
import Carousel from 'react-bootstrap/Carousel';

const PersonalTraining = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const PersonalTrainers = useSelector((state) => state.PersonalTrainers) || [];

  useEffect(() => {
    dispatch(setSingleTrainer(PersonalTrainers.id));
  }, []);

  console.log(PersonalTrainers);

  return (
    <div className="training-container">
      <div className="benefit-container">
        <h1>Build on you strengths</h1>
        <p>Our programs are custom tailored to your schedule and goals.</p>
      </div>
      <div className="featured-trainers">
        <Carousel variant="light">
          {PersonalTrainers.map((trainer) => (
            <Carousel.Item>
              <img src={trainer.Picture} alt="First slide" />
              <div className="overlay"></div>
              <div>
                <Carousel.Caption className="caption">
                  <p>-{trainer.Name}</p>
                  <p>"{trainer.Description}"</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="questions">Still have questions?</div>
    </div>
  );
};

export default PersonalTraining;
