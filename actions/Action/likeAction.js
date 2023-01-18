import { PROFILELIKE } from "../ActionType/getUpcomingMoviesActionType";
import { REMOVELIKE } from "../ActionType/getUpcomingMoviesActionType";
import { ADDFAVOURITE } from "../ActionType/getUpcomingMoviesActionType";
import { REMOVEFAVOURITE } from "../ActionType/getUpcomingMoviesActionType";
import { CACHE} from "../ActionType/getUpcomingMoviesActionType";
import { PROFILEIIMG } from "../ActionType/getUpcomingMoviesActionType";


export const AddLike=(payload)=>(
    {type:PROFILELIKE,payload}
);

export const RemoveLike=(payload)=>(
    {type:REMOVELIKE,payload}
);

export const AddFavourite=(payload)=>(
    {type:ADDFAVOURITE,payload}
);

export const RemoveFavourite=(payload)=>(
    {type:REMOVEFAVOURITE,payload}
);

export const ClearCache=(payload)=>(
    {type:CACHE,payload}
);

export const AddProfileImg=(payload)=>(
    {type:PROFILEIIMG,payload}
);