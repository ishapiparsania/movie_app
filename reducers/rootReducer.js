import {combineReducers} from 'redux';
import getUpcomingMoviesReducer from './getUpcomingMoviesReducer';
import getCastReducer from './getCastReducer';
import getProfileLikeReducer from './getProfileLikeReducer'
import getFavouriteReducer from './getFavouriteReducer';
import ImageReducer from './ImageReducer';
import getGenreMovieReducer from './getGenreMovieReducer';
import getStatusReducer from './getStatusReducer';

const rootReducer=combineReducers({
    getUpcomingMoviesReducer,
    getCastReducer,getProfileLikeReducer,getFavouriteReducer,ImageReducer,getGenreMovieReducer,getStatusReducer 
});

export default rootReducer;