import { supabase } from '../supabaseClient';

const SET_CLASS = 'SET_CLASS';

//action creators//

const _setClass = (classes) => {
  return {
    type: SET_CLASS,
    classes,
  };
};

//thunks//
export const setSingleClass = (id) => {
  return async (dispatch) => {
    try {
      let { data: Classes, error } = await supabase.from('Classes').select('*');
      dispatch(_setClass(Classes));
    } catch (error) {
      console.log(error);
    }
  };
};
let initialState = [];
export default function classReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CLASS:
      return action.classes;
    default:
      return state;
  }
}
