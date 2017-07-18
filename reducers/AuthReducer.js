import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  THEME_CHANGED
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, theme: '' };

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_USER:
      console.log('in LOGIN_USER in authreducer: ', action.payload);
        return { ...state, loading: true, error: '' };
      case LOGIN_USER_SUCCESS:
      console.log('in LOGIN_USER_SUCCESS in authreducer: ', action.payload);
        return {
          ...state, ...INITIAL_STATE, user: action.payload
        };
        // error: '',
        // loading: false,
        // email: '',
        // password: ''
      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed', loading: false, password: '' };
      case THEME_CHANGED:
        console.log('in THEME_CHANGED in authreducer: ', action.payload);
        return { ...state, theme: action.payload };
      default:
        return state;
    }
};
