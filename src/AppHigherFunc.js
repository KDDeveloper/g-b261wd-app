import React from "react";
import { appContext } from "./context";
import Test1 from "./Test1";
import withBorders from "./withBorders";
import withProfile from "./withProfile";
// import Test1 from "./Test1";

class App extends React.Component{

render (){
    console.log(this.props)
    return(
        <>
        <p>Guvi!</p>
        <appContext.Provider
        value ={{name:"KD"}}
        >
        <Test1/>
        </appContext.Provider>
        </>
    )
}
}

export default App;