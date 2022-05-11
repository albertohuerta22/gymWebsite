import React from 'react';
import './Classes.scss';
const Classes = () => {
  return (
    <>
      <div className="main-container">
        <h1>Take a look at our classes!</h1>

        {/*requires backend map to relfect avail classes for day */}
        <div className="calendar-container">
          <div className="box">M</div>
          <div className="box">T</div>
          <div className="box">W</div>
          <div className="box">Th</div>
          <div className="box">F</div>
          <div className="box">S</div>
          <div className="box">Su</div>
        </div>
      </div>
    </>
  );
};

export default Classes;
