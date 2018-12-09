import { ADD_MOVIE, REMOVE_MOVIE, SET_TEXT } from './actionTypes';

export const setSearchText = searchText => ({
  type: SET_TEXT,
  payload: { searchText }
});

export const removeMovie = movieId => ({
  type: REMOVE_MOVIE,
  payload: { movieId }
});

export const addMovie = values => ({
  type: ADD_MOVIE,
  payload: { values }
});
