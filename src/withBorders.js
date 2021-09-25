import React from "react";
import App from "./AppHigherFunc";

function withBorders (WrapperComponent){

    return (props)=>{
    // console.log(props)
        return(
        <div style={{ border: '1px solid' }}>
            <WrapperComponent {...props} name = {props.name.toUpperCase()} Student = "KD"/>
        </div>
    )
    }
}

export default withBorders;