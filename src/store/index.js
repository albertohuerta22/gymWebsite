import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import locationReducer from './locations';
import trainerReducer from './trainers';
import classReducer from './classes';

const reducer = combineReducers({
  PersonalTrainers: trainerReducer,
  Locations: locationReducer,
  Classes: classReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
