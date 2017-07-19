import firebase from 'firebase';
import axios from 'axios';
// import { Actions } from 'react-native-router-flux';
import {
  SEARCH_PHOTOS_FETCH_SUCCESS,
  SEARCH_FLICKR_FETCH_SUCCESS,
  SEARCH_UNSPLASH_FETCH_SUCCESS,
  CHALLENGE_CREATE
} from './types';


export const challengeFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/challenges/`)
      .on('value', snapshot => {
        dispatch({ type: CHALLENGE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};


export const searchPhotosFetch = ({ theme }) => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    axios.get(`https://api.500px.com/v1/photos/search?term=${theme}&page=1&rpp=50&image_size=440&sort=votes_count&exclude_nude=1&consumer_key=sPvXEpW2sFrch65rpyZQf01lBHuRGkEDDROTG1r4`)
    .then((response) => {
      dispatch({
        type: SEARCH_PHOTOS_FETCH_SUCCESS,
        payload: response.data
      });

      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  };
};

export const searchFlickrFetch = ({ theme }) => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fc5b1f0691f0e3e50223c55e710e4e50&text=${theme}&format=json`)
    .then((response) => {
      dispatch({
        type: SEARCH_FLICKR_FETCH_SUCCESS,
        payload: response.data
      });

      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  };
};

export const searchUnsplashFetch = ({ theme }) => {
  // const { currentUser } = firebase.auth();

  return (dispatch) => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${theme}&per_page=30&client_id=fa36ef3900bda8202031a09223a23258102a5676a47fe54e9a2ce34978615fe0`)
    .then((response) => {
      dispatch({
        type: SEARCH_UNSPLASH_FETCH_SUCCESS,
        payload: response.data
      });

      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  };
};
