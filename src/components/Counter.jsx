import React,{useState} from "react"

function Counter(){
   const [likes,setLikes]=useState(0);

function liked(){
    return(setLikes(likes+1))

}

function disliked(){
    return(setLikes(likes-1))
}

return( 
    <div className="Counter">
    <h1>{likes}</h1>

    <button onClick={liked}>Like</button>
    <button onClick={disliked}>Dislike</button>
    </div>
)
}
export default Counter;