import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
// import {
//   EMAIL_CHANGED,
//   PASSWORD_CHANGED,
//   LOGIN_USER_SUCCESS,
//   LOGIN_USER_FAIL,
//   LOGIN_USER
// } from './types';

import {
  USER_SHOW
} from './types';



export const userPage = () => {
  const { currentUser } = firebase.auth();

  return {
    type: USER_SHOW,
    payload: { prop, value }
  };
}

// export const userFetch = () => {
//   const { currentUser } = firebase.auth();
//
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/photos`)
//       .on('value', snapshot => {
//         dispatch({ type: PHOTOS_FETCH_SUCCESS, payload: snapshot.val() });
//       });
//   };
// };
