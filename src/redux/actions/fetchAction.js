 import { type } from "@testing-library/user-event/dist/type";
import { FETCH_PRODUCTS_SUCCESS } from "./actionTypes";
 import { FETCH_PRODUCTS_FAILURE } from "./actionTypes";
 import { FETCH_PRODUCTS_REQUEST } from "./actionTypes";
import axios from "axios";



 export const fetchProductRequest =()=>({
    type: FETCH_PRODUCTS_REQUEST
 })

 export const fetchProductSucess =(products) =>({

    type:FETCH_PRODUCTS_SUCCESS,
    payload:products
 })

 export const fetchProductFailure =(error) =>({
    type:FETCH_PRODUCTS_FAILURE,
    payload:error
 })


 export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductRequest())
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => dispatch(fetchProductSucess(response.data)))
        .catch(error => dispatch(fetchProductFailure(error)))
    }
 }