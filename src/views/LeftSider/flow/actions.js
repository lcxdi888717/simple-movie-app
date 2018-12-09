import { SET_GENRE } from './actionTypes';

export const setActiveGenre = (genreId) => ({
  type: SET_GENRE,
  payload: { genreId },
});
