
import { STATUS,CACHE } from "../actions/ActionType/getUpcomingMoviesActionType";



const INITIAL_STATE ={
    
    status:[]

}

function getStatusReducer(state=INITIAL_STATE,action){
    switch(action.type){
        
        
        
        case STATUS:{
            console.log(action)
            return {
                status:[ ...state.status,action.payload ]};

        }

        // case REMOVELIKE:{
        //     return {

        //         getLike:handleRemovelike(action.payload,state.getLike)
        //     };
        // }

        case CACHE:{
            return{
                status:[]
            }
        }
        
        default:
                return state;

    }

}

// const handleRemovelike=(item,getLike)=>
//     {  console.log(item)
//         console.log(getLike)
//         const removefirst = getLike.findIndex(check => 
//             (check.imdb_id === item.imdb_id))
            
//             getLike.splice(removefirst , 1);
//         return getLike;
//     };

export default getStatusReducer
