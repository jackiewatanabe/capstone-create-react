import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PhotoFormReducer from './PhotoFormReducer';
import PhotoReducer from './PhotoReducer';
import ThemeReducer from './ThemeReducer';
import SelectionReducer from './SelectionReducer';
import UnsplashSearchReducer from './UnsplashSearchReducer';
import FlickrSearchReducer from './FlickrSearchReducer';

export default combineReducers({
    auth: AuthReducer,
    photoForm: PhotoFormReducer,
    photos: PhotoReducer,
    themes: ThemeReducer,
    selectedResultPhotoId: SelectionReducer,
    unsplashPhotos: UnsplashSearchReducer,
    flickrPhotos: FlickrSearchReducer
});
