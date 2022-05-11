import { supabase } from '../supabaseClient';

const SET_LOCATION = 'SET_LOCATION';

//action creators//

const _setLocation = (locations) => {
  return {
    type: SET_LOCATION,
    locations,
  };
};

//thunks//
export const setSingleLocation = (id) => {
  return async (dispatch) => {
    try {
      let { data: Locations, error } = await supabase
        .from('Locations')
        .select('*');
      dispatch(_setLocation(Locations));
    } catch (error) {
      console.log(error);
    }
  };
};

//reducer
let initialState = [];

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return action.locations;
    default:
      return state;
  }
}
