// import { Last } from 'react-bootstrap/esm/PageItem';
import { supabase } from '../supabaseClient';

const SET_MESSAGE = 'SET_MESSAGE';

const ADD_MESSAGE = 'ADD_MESSAGE';

//action creators//

const _setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    message,
  };
};

const _addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message,
  };
};

//thunks//
export const setSingleMessage = (id) => {
  return async (dispatch) => {
    try {
      let { data: message } = await supabase.from('Messages').select('*');

      dispatch(_setMessage(message));
      console.log(message);
    } catch (error) {
      console.log(error);
    }
  };
};
export const addSingleMessage = (firstName, lastName, email, comment) => {
  return async (dispatch) => {
    try {
      const { data: message } = await supabase.from('Messages').insert([
        {
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Comment: comment,
        },
      ]);

      dispatch(_addMessage(message));
    } catch (error) {
      console.log(error);
    }
  };
};

let initialState = [];
export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return action.message;
    case ADD_MESSAGE:
      return [...state, action.message[0]];
    default:
      return state;
  }
}
