import { UPCOMINGMOVIES } from "../actions/ActionType/getUpcomingMoviesActionType";
import { POPULARMOVIES } from "../actions/ActionType/getUpcomingMoviesActionType";
import { NOWTV } from "../actions/ActionType/getUpcomingMoviesActionType";
import { POPULARTV } from "../actions/ActionType/getUpcomingMoviesActionType";



const INITIAL_STATE ={
    getUpcomingMovies:[],
    getPopularMovies:[],
    getNowTv:[],
    getPopularTv:[]


}

function getUpcomingMoviesReducer(state=INITIAL_STATE,action){
    switch(action.type){
        
        case UPCOMINGMOVIES:{
            return { ...state, getUpcomingMovies: action.payload };
        }
        case POPULARMOVIES:{
            return { ...state, getPopularMovies: action.payload };
        }
        case NOWTV:{
            return { ...state, getNowTv: action.payload };
        }
        case POPULARTV:{
            return { ...state, getPopularTv: action.payload };
        }

        default:
                return state;

    }

}

export default getUpcomingMoviesReducer
