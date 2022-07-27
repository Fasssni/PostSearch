import React, {useState} from "react";
import Posts from "./Posts";


function PostLists({posts,title,remove}){
    if(!posts.length){
        
        return(<h1 style={{textAlign:"center"}}>Список постов не найден!</h1> )

      }

    return(
        <div className="PostsList">
            <h1 style={{textAlign:"center", color:"black"}}>{title}</h1><br/>
            <div className="mar">
            {posts.map((post)=>
           <Posts remove={remove} post={post} key={post.id}/>
            )}
           </div>
        


            
        </div>
    )
}

export default PostLists;