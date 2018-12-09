import { ADD_MOVIE, REMOVE_MOVIE, SET_TEXT } from './actionTypes';

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

    case REMOVE_MOVIE:
      const { movieId } = action.payload;
      return {
        ...state,
        data: state.data.filter(m => m.id !== movieId)
      };

    case ADD_MOVIE:
      const { values } = action.payload;
      const newMovie = {
        ...values,
        id: Date.now()
      };
      return {
        ...state,
        data: [...state.data, newMovie]
      };

    default:
      return state;
  }
};

export default movies;
