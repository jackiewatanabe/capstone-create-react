import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PHOTO_UPDATE,
  PHOTO_CREATE,
  PHOTOS_FETCH_SUCCESS
} from './types';

export const photoUpdate = ({ prop, value }) => {
  return {
    type: PHOTO_UPDATE,
    payload: { prop, value }
  };
};


export const photoCreate = ({ name, description, category, image_url }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/photos`)
    .push({ name, description, category, image_url })
    .then(() => {
      dispatch({ type: PHOTO_CREATE });
      Actions.photoList({ type: 'reset' });
    });
  };
};

export const photosFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/photos`)
      .on('value', snapshot => {
        dispatch({ type: PHOTOS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
