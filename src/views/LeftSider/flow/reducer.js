import { SET_GENRE } from './actionTypes';

const initialState = [
  {
    id: 1,
    title: 'all',
    isActive: true,
  },
  {
    id: 2,
    title: 'comedy',
    isActive: false,
  },
  {
    id: 3,
    title: 'romantic',
    isActive: false,
  },
];

const genres = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRE:
      const { genreId } = action.payload;
      return state.map((g) => {
        g.isActive = g.id === genreId;
        return g;
      });

    default:
      return state;
  }
};

export default genres;
