import { combineReducers } from "redux";
import productReducer from "./productReducer";
import showReducer from "./showReducer";


const rootReducer=combineReducers({
    products:productReducer,
    item:showReducer
})


export default rootReducer