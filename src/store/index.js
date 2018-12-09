import { combineReducers, createStore } from 'redux';
import genres from '../views/LeftSider/flow/reducer';
import movies from '../views/MoviesList/flow/reducer';

const reducers = combineReducers({ genres, movies });
const store = createStore(reducers);

export default store;
