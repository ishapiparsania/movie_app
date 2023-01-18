
import { ADDFAVOURITE,REMOVEFAVOURITE } from "../actions/ActionType/getUpcomingMoviesActionType";
import { CACHE } from "../actions/ActionType/getUpcomingMoviesActionType";

const INITIAL_STATE ={
    
    Favourite:[]

}

function getFavouriteReducer(state=INITIAL_STATE,action){
    switch(action.type){
        
        
    
        case ADDFAVOURITE:{

            return {
                Favourite:[ ...state.Favourite,action.payload ]
            };

            
        }

        case REMOVEFAVOURITE:
        return {

            Favourite:handleRemoveFav(action.payload,state.Favourite)
        };
        
        case CACHE:{
            return{
                Favourite:[]
            }
        }
        default:
                return state;

    }


}

const handleRemoveFav=(item,Favourite)=>
    {  console.log(item)
        console.log(Favourite)
        const removefirst = Favourite.findIndex(check => 
            (check.imdb_id === item.imdb_id))
            
            Favourite.splice(removefirst , 1);
        return Favourite;
    };

export default getFavouriteReducer
