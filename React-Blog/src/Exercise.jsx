import { useState } from "react";

function Exercise(){
   const [fruit,setFruit]=useState('Sitafal');
    return(
        <>
        <h1>{fruit}</h1>
        <button onClick={change}>Change</button>
        </>
    );
    
    function change(){
        setFruit('Kela');
    }
}



export default Exercise;