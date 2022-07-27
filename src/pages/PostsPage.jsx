import React,{useState} from "react";

import "../styles/Posts.css"
import PostLists from "../components/PostLists";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import Filter from "../components/UI/button/Filter/Filter";
import axios from "axios";


function PostPage() {
  const [posts,setPosts]=useState([
    {id:0, title:"Is JavaScript cool?", text:"It is"},
    {id:1, title:"here", text:"text"},
    {id:2, title:"here", text:"text"},
    {id:3, title:"here", text:"text"}
    
  ]);

  const [posts2,setPosts2]=useState([
    {id:0, title:"Is Python cool?", text:"It is"},
    {id:1, title:"here", text:"text"},
    {id:2, title:"here", text:"text"},
    {id:3, title:"here", text:"text"}
    
  ]);
    function deleted(){
        setPosts("")


    }
    const CreatePost=(newPost)=>{

      return(
      setPosts([newPost,...posts]))

    }
    const removePost=(post)=>{
      setPosts(posts.filter(p=>p.id!==post.id))

     }
    
    const [selectedSort,setSelectedSort]=useState();
    const sortPosts=(sort)=>{ 
      setSelectedSort(sort);
      console.log(sort)
      setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])));
    }
  

  async function fetchPosts(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setPosts(response.data);
    console.log(posts)
    console.log(response.data)

   }

   const deletePosts=()=>{
    return(
      setPosts(" ")
    )
   }

   
    

    
  
     
  
  
  return(

  <div className="App">
        
        <MyButton onClick={fetchPosts}>GetPosts</MyButton> 
        <PostForm create={CreatePost}/>
          
          <Filter 
         
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
          {value:"title",
            name:"По названию"},
          {value:"body",
            name:"По описпнию"}]}/>
       
          <PostLists posts={posts} remove={removePost} title="Список постов 1"/>
        
          
          {/* <PostLists posts={post3} title="Список постов 3"/> */}
  </div>)}




export default PostPage;
