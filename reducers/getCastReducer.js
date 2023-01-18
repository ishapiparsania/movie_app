
import { GETCAST } from "../actions/ActionType/getUpcomingMoviesActionType";

const INITIAL_STATE ={
    
    getCast:[]


}

function getCastReducer(state=INITIAL_STATE,action){
    switch(action.type){
        
        
        case GETCAST:{
            return { ...state, getCast: action.payload };
        }

        default:
                return state;

    }

}

export default getCastReducer
