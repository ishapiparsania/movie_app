    import { GETCAST } from "../ActionType/getUpcomingMoviesActionType";
    export const getCastDetails=(params)=>{
    try {
        return async dispatch => {
          if(params.movieId){
            const TV_POPULAR_URL = 'http://47.254.174.28/movie/id/'+params.movieId+'/cast/?page=1&page_size=2'
            const result = await fetch(TV_POPULAR_URL);
            const json = await result.json();
            if (json) {
                const array = [];
                if(json.results.roles){
                    for(var i=0;i<json.results.roles.length;i++){
                        const obj = {};
                            const moviApiurl='http://47.254.174.28/actor/id/'+json.results.roles[i].actor.imdb_id+'/'
                            await fetch(moviApiurl)
                            .then((responseNew) => responseNew.json())
                            .then((jsonN) => {
                                array.push(jsonN.results)
                            })
                            .catch((error) => console.error(error))
                    }

                }
                
                dispatch({
                    type: GETCAST,
                    payload: array
                });
            } else {
                console.log('Unable to fetch!');
            } 
          }
          else{
            const TV_POPULAR_URL = 'http://47.254.174.28/series/id/'+params.seriesId+'/cast/?page=1&page_size=2' 
            // console.log(TV_POPULAR_URL)
            const result = await fetch(TV_POPULAR_URL);
            const json = await result.json();
            // console.log("get series data")
            // console.log(json)
            if (json) {
                const array = [];
                if(json.results.roles){

                
                for(var i=0;i<json.results.roles.length;i++){
                    const obj = {};
                        const moviApiurl='http://47.254.174.28/actor/id/'+json.results.roles[i].actor.imdb_id+'/'
                        // console.log(moviApiurl)
                        await fetch(moviApiurl)
                        .then((responseNew) => responseNew.json())
                        .then((jsonN) => {
                            
                            // console.log(jsonN)
                            array.push(jsonN.results)
                            // console.log("getmoviesdataagain")
                            // console.log(array);
                        })
                        .catch((error) => console.error(error))
                }
            }
                dispatch({
                    type: GETCAST,
                    payload: array
                });
            } else {
                console.log('Unable to fetch!');
            }

              
          }
            
// console.log(json)
            
        }
    } catch (error) {
        console.log(error);
    }
}