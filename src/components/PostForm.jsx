import React from "react"; 
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/button/input/MyInput";
import { useState } from "react";
var i=10;
const PostForm=({create})=>{
    const [newPost,setNewPost]=useState({id:i++, title:"",text:""})
    const addNewPost=(e)=>{
  
    e.preventDefault()
    if(newPost.title!==""&&newPost.text!==""){
   
    console.log(newPost);
    console.log(newPost.title)
    create(newPost)
    setNewPost({id:i, title:"",text:""})
  
    }
    else{
      alert("Напишите полностью название и текст!")
    }}

    

    return(
        <form style={{display:"flex",flexDirection:"column",justifyContent: "center"}}>
       <MyInput 
        type="text"
        value={newPost.title}
        onChange={e=>{setNewPost({...newPost, title:e.target.value})}} 
        placeholder="Название поста"/>
       <MyInput type="text" placeholder="Текст"
       value={newPost.text}
       onChange={e=>{setNewPost({...newPost, text:e.target.value})}}/>
       <MyButton onClick={addNewPost}>Пост</MyButton>
       </form>
    )
    }

    export default PostForm;