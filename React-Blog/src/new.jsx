import { useState } from "react";

function New(){
    const [count,setCount] = useState(0);
    return(
        <>
                <h1>{}</h1>
                <h1>{count}</h1>
             {
                count==0?<input type="text" placeholder="your name" name="name"></input>
                :count==1?<h1>Your Life is very good and your future is bright..</h1>
                :count==3?<h1>You will be buy brand new car</h1>:<h1>All is Well</h1>
             }
            
            <br></br>
            <button onClick={()=>setCount(count+1)}>Check your Future</button>
            <button onClick={()=>setCount(count==0)}>Reset</button>
        </>
    );
}
export default New;