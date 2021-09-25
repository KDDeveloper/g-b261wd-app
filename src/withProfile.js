const loggendInUser = {
    firstName: "Kushal",
    lastName: "Davda",
    city: "Mumbai"
}

function withProfile (WrapperComponent){

    return (props)=>{
    // console.log(props)
        return(
        <div style={{ border: '1px solid' }}>
            <WrapperComponent {...props} user={loggendInUser}/>
        </div>
    )
    }
}

export default withProfile;