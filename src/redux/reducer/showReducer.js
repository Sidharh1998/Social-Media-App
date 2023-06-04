import { SHOW_ITEM } from "../actions/actionTypes";


const initialState={
    item:{}
}

const showReducer =(state=initialState,action)=>{

    switch(action.type){

        case SHOW_ITEM:return({
            ...state,item:action.payload
        })
        default:return state
    }
}


export default showReducer;