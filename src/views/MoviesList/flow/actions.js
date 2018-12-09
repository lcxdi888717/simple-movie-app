import { SET_TEXT } from './actionTypes';

export const setSearchText = searchText => ({
  type: SET_TEXT,
  payload: { searchText }
});
