import {
  SELECT_RESULT_PHOTO
} from './types';

export const selectResultPhoto = (resultPhotoId) => {
  return {
    type: SELECT_RESULT_PHOTO,
    payload: resultPhotoId
  };
};
