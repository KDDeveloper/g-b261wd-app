import React from "react";
import { BrowserRouter, Route, Switch, Redirect, NavLink} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import Post from "./Post";
import NotFound from "./NotFound"
import Protected from "./Protected"
import { Component } from "react/cjs/react.production.min";

function PrivateRoute({Path,component: Component}){
return (
  <Route 
    path = {Path}
    
      render={()=>{
        let isLoggedIn = localStorage.getItem('isLoggedIn')
         
        return isLoggedIn ? <Component /> : <p>Please login! </p>
      }}
  />
)
}

function App ( ) {
return(
  <>
  <p>Hellow GUvi!</p>
  <BrowserRouter>
  <div>
    <NavLink exact activeStyle={{color:'green'}} to="/">Home</NavLink>
    <NavLink activeStyle={{color:'green'}} to="/about">About</NavLink>
    <NavLink activeStyle={{color:'green'}} to="/posts">Posts</NavLink>
    <NavLink activeStyle={{color:'green'}} to="/protected">Protected</NavLink>
    <button onClick={()=>{localStorage.setItem('isLoggedIn',true)}}>Login</button>
  </div>
  <Switch>
  <Route path="/" exact component={Home}/>
  <PrivateRoute path="/about" component={About}/>
  <PrivateRoute path="/posts/:id" component={Post}/>
  <PrivateRoute path="/posts" component={Posts}/>
  <PrivateRoute path="/protected" component={Protected}/>
  <Route path="/home">
    <Redirect to="/"/>
  </Route>
  <Route path ="*" component={NotFound}/>
  </Switch>
  </BrowserRouter>
</>
)
}

export default App;
