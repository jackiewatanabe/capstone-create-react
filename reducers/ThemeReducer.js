import {
  SEARCH_PHOTOS_FETCH_SUCCESS,
  CHALLENGE_CREATE
} from '../actions/types';

const INITIAL_STATE = {};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SEARCH_PHOTOS_FETCH_SUCCESS:
        return action.payload;
      // case CHALLENGE_CREATE:
      //   console.log('action.payload: ', action.payload);
      //   return { ...state, theme: action.payload };
      default:
        return state;
  }
};
