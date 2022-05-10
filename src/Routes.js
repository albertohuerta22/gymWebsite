import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Clubs from './components/Clubs/Clubs';
import PersonalTraining from './components/PersonalTraining/PersonalTraining';
import Classes from './components/Classes/Classes';
import Contact from './components/Contact/Contact';

// import { GoogleApiWrapper } from 'google-maps-react';

const RoutesDirectory = () => {
  return (
    <Routes>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/personaltraining" element={<PersonalTraining />} />
        <Route path="/contact" element={<Contact />} />
      </>
    </Routes>
  );
};

export default RoutesDirectory;
