import { GENREMOVIE,CACHE} from "../actions/ActionType/getUpcomingMoviesActionType";



const INITIAL_STATE ={
    getGenreData:[]


}

function getGenreMovieReducer(state=INITIAL_STATE,action){
    switch(action.type){
        
        case GENREMOVIE:{
            return{
            getGenreData : genrehandler(action.payload,state)
             }
   

            
            // return { ...state, getGenreData: action.payload };
        }

        case CACHE:{
            return{
                getGenreData:[]
            }
        }

        default:
                return state;

    }

    

}

const genrehandler=(item,statepop)=>{
    // console.log("hii")
    // console.log(item)
    let stateD = statepop.getGenreData
    if(stateD && stateD.length >= 1){
        console.log(stateD)
      const getData =   stateD.find(element => 
            (element.movieId == item.movieId))   
            
        if(getData){
            const getD=   stateD.findIndex(element => 
                (element.movieId == item.movieId))
            let findCount = getData.count;
                stateD.splice(getD ,1)           
                
           
            let obj = {
                movieId: item.movieId,
                count : findCount+1,
                seriesId : item.seriesId
            }
            
            stateD.push(obj)
            return stateD;
        }else{
            let obj = {
                movieId: item.movieId,
                count : 1,
                seriesId : item.seriesId
            }
            
            stateD.push(obj)
            return stateD;
        }
        
    }else{
        let d = [];
        let obj = {
            movieId: item.movieId,
            count : 1,
            seriesId : item.seriesId
        }
        
        d.push(obj)
        return d;

    }

}

export default getGenreMovieReducer