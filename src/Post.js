import React from "react"
import { useParams } from "react-router"

function Post({match}){
    const params= useParams()
    console.log(match.params)
    return(
        <>
        <p>Post Page!-{params.id}</p>
        </>
    )
}

export default Post