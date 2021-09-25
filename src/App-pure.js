import react from "react";
import React from "react";

class App extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state={
            count:0,
            user: {name:"Guvi"}
        }
    }

    inputRef = react.createRef()
    
    handleSubmit=()=>{
        console.log(this.inputRef.current)
        console.log(this.inputRef.current.value)
    }
    render() {
        console.log('rendered!');
        return(
            <>
            <p>Count:{this.state.count}</p>
            <button onClick={()=>this.setState({count:0})}>Reset</button>
            <button onClick={()=>this.setState({user:{name:"Guvi"}})}>Change Name</button>
            <div>
                <input ref = {this.inputRef} type="text" />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
            </>
        )
    }
}


export default App