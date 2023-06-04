import React from "react"
import { useSelector} from "react-redux";




const ItemPage =()=>{
   

    const {item} =useSelector(state=>state.item)

   console.log(item);





    return(
        <div className="container">
         <div key={item.id} >
                  <h3>Details Page For Post With ID {item.id}</h3>
                    <img className="carditem" src={`https://picsum.photos/200?random=${item.id}`}></img>
                    <br></br>
                    <div>UserId:{item.userId} </div>
                    <br></br>
                    <div>Title:{item.title}</div>
                    <br></br>
                    <div>Body:{item.body}</div>
                </div>
        </div>
    )
}

export default ItemPage