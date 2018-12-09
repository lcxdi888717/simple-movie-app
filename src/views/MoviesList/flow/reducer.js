import { SET_TEXT } from './actionTypes';

const initialState = {
  data: [
    {
      id: 1,
      title: 'a',
      poster:
        'https://cdn.eventcinemas.com.au/cdn/resources/movies/12438/images/largeposter.jpg',
      description: 'a desc',
      genre: 1
    },
    {
      id: 2,
      title: 'b',
      poster:
        'https://cdn.eventcinemas.com.au/cdn/resources/movies/12270/images/largeposter.jpg',
      description: 'b desc',
      genre: 2
    }
  ],
  searchText: ''
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      const { searchText } = action.payload;
      return {
        ...state,
        searchText
      };

    default:
      return state;
  }
};

export default movies;
