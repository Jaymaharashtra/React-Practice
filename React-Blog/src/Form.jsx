import { useState } from "react";
function Form(){

    const [val,setVal] = useState('pratham');
    return(
        <>
        <h1>This Form Data will Show in below</h1>
        <input type="text" value={val} placeholder="Name" onChange={(event)=>{setVal(event.target.value)}} ></input>
        <p>{val}</p>
        <button onClick={(event)=>{setVal(event.target.value)}}>Reset</button>
        </>
    );
}

export default Form;