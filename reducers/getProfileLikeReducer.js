
import { PROFILELIKE, REMOVELIKE,CACHE } from "../actions/ActionType/getUpcomingMoviesActionType";



const INITIAL_STATE ={
    
    getLike:[]

}

function getProfileLikeReducer(state=INITIAL_STATE,action){
    switch(action.type){
        
        
        
        case PROFILELIKE:{
            console.log(action)
            return {
                getLike:[ ...state.getLike,action.payload ]};

        }

        case REMOVELIKE:{
            return {

                getLike:handleRemovelike(action.payload,state.getLike)
            };
        }

        case CACHE:{
            return{
                getLike:[]
            }
        }
        
        default:
                return state;

    }

}

const handleRemovelike=(item,getLike)=>
    {  console.log(item)
        console.log(getLike)
        const removefirst = getLike.findIndex(check => 
            (check.imdb_id === item.imdb_id))
            
            getLike.splice(removefirst , 1);
        return getLike;
    };

export default getProfileLikeReducer
