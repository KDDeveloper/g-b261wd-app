import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const post = [
    {
    
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
    
      "id": 2,
      "title": "qui est esse",
    },
    {
    
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
    {
    
      "id": 4,
      "title": "eum et est occaecati",
    },
    {
    
      "id": 5,
      "title": "nesciunt quas odio",
    }
]
function Posts (props){
  const history = useHistory()
return(
    <>
<p>Post</p>
<button onClick ={history.goBack}>Go Back</button>
<button onClick ={history.goForward}>Go forward</button>
{post.map(p=><p key={p.id}><Link to={`/posts/${p.id}`}>{p.title}</Link></p>)}
</>
)}

export default Posts
