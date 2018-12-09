import { SET_TEXT, REMOVE_MOVIE, ADD_MOVIE } from './actionTypes';

export const setSearchText = searchText => ({
  type: SET_TEXT,
  payload: { searchText }
});

export const removeMovie = movieId => ({
  type: REMOVE_MOVIE,
  payload: { movieId }
});
