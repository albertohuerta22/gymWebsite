import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleClass } from '../../store/classes';
import { Link, useNavigate } from 'react-router-dom';
import './Classes.scss';
import Accordion from 'react-bootstrap/Accordion';

const Classes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Classes = useSelector((state) => state.Classes) || [];

  useEffect(() => {
    dispatch(setSingleClass(Classes.id));
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredClick = (value) => {
    if (value === '') {
      setSearchTerm(
        Classes.map((day, idx) => (
          <Accordion.Item activeKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else if (value === 'M') {
      setSearchTerm(
        Classes.filter((day) => day.Day === 'Monday').map((day, idx) => (
          <Accordion.Item activeKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else if (value === 'T') {
      setSearchTerm(
        Classes.filter((day) => day.Day === 'Tuesday').map((day, idx) => (
          <Accordion.Item eventKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else if (value === 'W') {
      setSearchTerm(
        Classes.filter((day) => day.Day === 'Wednesday').map((day, idx) => (
          <Accordion.Item activeKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else if (value === 'Th') {
      setSearchTerm(
        Classes.filter((day) => day.Day === 'Thursday').map((day, idx) => (
          <Accordion.Item activeKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else if (value === 'F') {
      setSearchTerm(
        Classes.filter((day) => day.Day === 'Friday').map((day) => (
          <Accordion.Item>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else if (value === 'S') {
      setSearchTerm(
        Classes.filter((day) => day.Day === 'Saturday').map((day, idx) => (
          <Accordion.Item activeKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else if (value === 'Su') {
      setSearchTerm(
        Classes.filter((day) => day.Day === 'Sunday').map((day, idx) => (
          <Accordion.Item activeKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else if (value === 'All') {
      setSearchTerm(
        Classes.map((day, idx) => (
          <Accordion.Item activeKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    } else {
      setSearchTerm(
        Classes.map((day, idx) => (
          <Accordion.Item activeKey={idx}>
            <Accordion.Header>{day.Name}</Accordion.Header>
            <Accordion.Body>{day.Description}</Accordion.Body>
          </Accordion.Item>
        ))
      );
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="header-one">
          <h1>Take a look at our classes!</h1>
        </div>

        {/*requires backend map to relfect avail classes for day */}
        <div className="calendar-container">
          <div
            className="box"
            onClick={(e) => filteredClick(e.target.innerHTML)}
          >
            M
          </div>
          <div
            className="box"
            onClick={(e) => filteredClick(e.target.innerHTML)}
          >
            T
          </div>
          <div
            className="box"
            onClick={(e) => filteredClick(e.target.innerHTML)}
          >
            W
          </div>
          <div
            className="box"
            onClick={(e) => filteredClick(e.target.innerHTML)}
          >
            Th
          </div>
          <div
            className="box"
            onClick={(e) => filteredClick(e.target.innerHTML)}
          >
            F
          </div>
          <div
            className="box"
            onClick={(e) => filteredClick(e.target.innerHTML)}
          >
            S
          </div>
          <div
            className="box"
            onClick={(e) => filteredClick(e.target.innerHTML)}
          >
            Su
          </div>
          <div
            className="box"
            onClick={(e) => filteredClick(e.target.innerHTML)}
          >
            All
          </div>
        </div>
        <div className="content-container">{searchTerm}</div>
      </div>
    </>
  );
};

export default Classes;
