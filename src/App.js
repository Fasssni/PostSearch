import React  from "react";
import { BrowserRouter, Route, Routes, Router, Switch, Navigate  } from "react-router-dom";
import About from "../src/pages/About";
import PostPage from "../src/pages/PostsPage"
import ReactDOM from 'react-dom';

const App=()=>{

  return(
      <div>
      <Router>
      <Route path="/posts" component={<PostPage/>} >
      </Route>
      </Router>
      </div>
    
    
  
  )
}

export default App;