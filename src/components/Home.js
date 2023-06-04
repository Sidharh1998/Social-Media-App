import React from "react";
import { useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

import { fetchProducts } from "../redux/actions/fetchAction";

import { showItem } from "../redux/actions/showAction";
import { useNavigate } from "react-router-dom";


const Home =()=>{

  const loading= useSelector(state=> state.products.loading)
  const products=  useSelector(state=> state.products.products)
  const error= useSelector(state =>state.products.error)
  const navigate=useNavigate()
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

 

  if(loading) return <h1>Loading....</h1>
  if(error)  return <h1>{error}</h1>
    return(
        <div className="container">
        <div className="grid">
         {
            products.map(product =>(
                <div key={product.id} className="card" onClick={ (e)=>{
                  console.log(product)
                  dispatch(showItem(product))
                  navigate("/item")
                  }}>
                    <img src={`https://picsum.photos/200?random=${product.id}`}></img>
                    
                    <div>UserId:{product.userId} </div>
                  
                    <div>Title:{product.title.slice(0,20)}....</div>
                    <div>Body:{product.body.slice(0,70)}</div>
                    <div>ReadMore...</div>

                </div>

            ))
         }
        </div>
        
        </div>
    )
}

export default Home