import { UPCOMINGMOVIES } from "../ActionType/getUpcomingMoviesActionType";
import { POPULARMOVIES } from "../ActionType/getUpcomingMoviesActionType";
import { GETMOVIEDETAIL } from "../ActionType/getUpcomingMoviesActionType";
import { NOWTV  } from "../ActionType/getUpcomingMoviesActionType";
import { POPULARTV  } from "../ActionType/getUpcomingMoviesActionType";


const API_URL = "http://47.254.174.28/movie/byYear/2021/?page=2&page_size=31"
const POPULAR_API_URL = "http://47.254.174.28/movie/order/byRating/?page=2&page_size=52"
const TV_NOW_URL = "http://47.254.174.28/series/byYear/2021/?page=2&page_size=31"
const TV_POPULAR_URL = "http://47.254.174.28/series/order/byRating/?page=2&page_size=38"
// const [loading, setLoading] = useState(false);

export const getUpcomingMovies=()=>{
   try {
        return async dispatch => {
            const result = await fetch(API_URL);
            const json = await result.json();
            console.log(json)
            if (json) {
                const array = [];
                for(var i=0;i<json.results.length;i++){
                         
                          const moviApiurl='http://47.254.174.28/movie/id/'+json.results[i].imdb_id+'/'
                          await fetch(moviApiurl)
                          .then((responseNew) => responseNew.json())
                          .then((jsonN) => {
                            
                            array.push(jsonN.results)
                        })
                          .catch((error) => console.error(error))
                          
                }
                dispatch({
                    type: UPCOMINGMOVIES,
                    payload: array
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const getPopularMovies=()=>{
    try {
         return async dispatch => {
             const result = await fetch(POPULAR_API_URL);
             const json = await result.json();
             if (json) {
                 const array = [];
                 for(var i=0;i<json.results.length;i++){
                          
                           const moviApiurl='http://47.254.174.28/movie/id/'+json.results[i].imdb_id+'/'
                           await fetch(moviApiurl)
                           .then((responseNew) => responseNew.json())
                           .then((jsonN) => {
                             
                             array.push(jsonN.results)
                         })
                           .catch((error) => console.error(error))
                           
                 }
                 dispatch({
                     type: POPULARMOVIES,
                     payload: array
                 });
             } else {
                 console.log('Unable to fetch!');
             }
         }
     } catch (error) {
         console.log(error);
     }
 }


 export const getNowTv=()=>{
    try {
         return async dispatch => {
             const result = await fetch(TV_NOW_URL);
             const json = await result.json();
             console.log(json)
             if (json) {
                 const array = [];
                 for(var i=0;i<json.results.length;i++){
                          
                           const moviApiurl='http://47.254.174.28/series/id/'+json.results[i].imdb_id+'/'
                           await fetch(moviApiurl)
                           .then((responseNew) => responseNew.json())
                           .then((jsonN) => {
                             
                             array.push(jsonN.results)
                         })
                           .catch((error) => console.error(error))
                           
                 }
                 dispatch({
                     type: NOWTV,
                     payload: array
                 });
             } else {
                 console.log('Unable to fetch!');
             }
         }
     } catch (error) {
         console.log(error);
     }
 }


 export const getPopularTv=()=>{
    try {
         return async dispatch => {
             const result = await fetch(TV_POPULAR_URL);
             const json = await result.json();
             console.log(json)
             if (json) {
                 const array = [];
                 for(var i=0;i<json.results.length;i++){
                          
                           const moviApiurl='http://47.254.174.28/series/id/'+json.results[i].imdb_id+'/'
                           await fetch(moviApiurl)
                           .then((responseNew) => responseNew.json())
                           .then((jsonN) => {
                             
                             array.push(jsonN.results)
                         })
                           .catch((error) => console.error(error))
                           
                 }
                 dispatch({
                     type: POPULARTV,
                     payload: array
                 });
             } else {
                 console.log('Unable to fetch!');
             }
         }
     } catch (error) {
         console.log(error);
     }
 }



 


