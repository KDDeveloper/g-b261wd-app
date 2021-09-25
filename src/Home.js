import React from "react";
import { useHistory } from "react-router";


function Home (props){
    const history = useHistory();
return(
<>
<p>Home</p>
<button onClick ={()=>history.goBack()}>Go Back</button>
<button onClick ={history.goForward}>Go forward</button>
<button onClick ={()=>history.push("/posts")}>Go to Posts Page- push</button>
<button onClick ={()=>history.replace("/posts")}> Go to Posts Page- replace</button>
<p>{props.location.search}</p>
</>
)}

export default Home