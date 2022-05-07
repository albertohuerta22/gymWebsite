import React from 'react';

const Classes = () => {
  return (
    <>
      <div className="main-container">
        <h1>Take a look at our classes!</h1>

        {/*requires backend map to relfect avail classes for day */}
        <div className="class-container">
          <div className="time">Monday 0800</div>
          <div className="class-type">Cardio Dance</div>
        </div>
        <div className="class-container">
          <div className="time">Monday 0800</div>
          <div className="class-type">Cardio Dance</div>
        </div>
        <div className="class-container">
          <div className="time">Monday 0800</div>
          <div className="class-type">Cardio Dance</div>
        </div>
        <div className="class-container">
          <div className="time">Monday 0800</div>
          <div className="class-type">Cardio Dance</div>
        </div>
        <div className="class-container">
          <div className="time">Monday 0800</div>
          <div className="class-type">Cardio Dance</div>
        </div>
      </div>
    </>
  );
};

export default Classes;
