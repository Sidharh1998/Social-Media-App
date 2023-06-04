import { SHOW_ITEM } from "./actionTypes";



export const showItem =(product) =>({
    type:SHOW_ITEM,
    payload:product
})