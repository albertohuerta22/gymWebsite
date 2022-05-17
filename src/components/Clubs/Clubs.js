import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import { setSingleLocation } from '../../store/locations';

import Accordion from 'react-bootstrap/Accordion';
import './Clubs.scss';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export const Clubs = (props) => {
  const dispatch = useDispatch();

  const Locations = useSelector((state) => state.Locations) || [];

  useEffect(() => {
    dispatch(setSingleLocation(Locations.id));
  }, [Locations.id, dispatch]);

  return (
    <div className="map-container">
      <div className="map">
        <Map
          google={props.google}
          zoom={12}
          style={{
            width: '50%',
            height: '100%',
          }}
          initialCenter={{
            lat: 40.712776,
            lng: -74.005974,
          }}
        >
          {Locations.map((location, idx) => (
            <Marker
              position={{
                lat: parseFloat(location.Lat),
                lng: parseFloat(location.Lng),
              }}
              key={idx}
            />
          ))}
        </Map>
      </div>

      <div className="map-desciption">
        <div className="map-title">Find A Club Near You!</div>
        <div className="map-content">
          {Locations.map((location, idx) => (
            <Accordion>
              <Accordion.Item eventKey={idx}>
                <Accordion.Header>{location.Name}</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
})(Clubs);
