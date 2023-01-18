
import { PROFILEIIMG,CACHE} from "../actions/ActionType/getUpcomingMoviesActionType";



const INITIAL_STATE ={
    
    profileImg : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"

}

function ImageReducer(state=INITIAL_STATE,action){
    switch(action.type){
        
        case PROFILEIIMG:{
            console.log(action)
            return {
                profileImg:action.payload };

        }

        case CACHE:{
            return{
                profileImg:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png"
            }
        }
        
        default:
                return state;

    }

}

export default ImageReducer
