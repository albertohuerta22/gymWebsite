import { supabase } from '../supabaseClient';

//action types//

const SET_TRAINERS = 'SET_TRAINERS';

//action creators//

const _setTrainer = (trainers) => {
  return {
    type: SET_TRAINERS,
    trainers,
  };
};

//thunks//
export const setSingleTrainer = (id) => {
  return async (dispatch) => {
    try {
      let { data: PersonalTrainers } = await supabase
        .from('PersonalTrainers')
        .select('*');

      dispatch(_setTrainer(PersonalTrainers));
    } catch (error) {
      console.log(error);
    }
  };
};

//reducer

let initialState = [];

export default function trainerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRAINERS:
      return action.trainers;
    default:
      return state;
  }
}
