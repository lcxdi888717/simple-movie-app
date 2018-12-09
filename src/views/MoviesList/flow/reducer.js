import { ADD_MOVIE, REMOVE_MOVIE, SET_TEXT } from './actionTypes';

const initialState = {
  data: [
    {
      id: 1,
      title: 'Mortal Engines',
      poster:
        'https://cdn.eventcinemas.com.au/cdn/resources/movies/12438/images/largeposter.jpg',
      description:
        'Many years after the "Sixty Minute War," cities survive a now desolate Earth by moving around on giant wheels attacking and devouring smaller towns to replenish their resources',
      genre: 3
    },
    {
      id: 2,
      title: 'Creed II',
      poster:
        'https://cdn.eventcinemas.com.au/cdn/resources/movies/12270/images/largeposter.jpg',
      description:
        'Adonis Creed tries to seek revenge when he goes toe to toe with the man who killed his father.',
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
