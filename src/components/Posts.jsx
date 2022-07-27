import React, {useState} from "react"
import App from "../App"
import MyButton from "./UI/button/MyButton";

function Posts(props,{remove}){
   
    const toSort=[7,85,1,5];
    
   
        const sorted=[...toSort].sort((a,b)=>a-b).map(p=>p)
        const sortedd=[...toSort].sort((a,b)=>b-a).map(p=>p)
       
  
        
          
        
       
     
  
  
    
    return(
        <div className="Posts">
            <div className="left">
            <h2 className="title" >{props.post.title}</h2>
            <p className="article">{props.post.text}</p>
            </div>
            <MyButton onClick={()=>{props.remove(props.post);}}>Удалить</MyButton> 
            
        </div>
    )
}

export default Posts;