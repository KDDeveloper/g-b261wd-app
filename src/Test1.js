import Test2 from "./Test2";
import { appContext } from "./context";


export default function Test1 (props) {
    return (
        <appContext.Consumer>
        {(context)=>{
            return(
                <>
                <p>Test1 Component- {context.name}</p>
                <Test2 name = {context.name}/>
                </>
            )
        }

        }
        </appContext.Consumer>
    )
}