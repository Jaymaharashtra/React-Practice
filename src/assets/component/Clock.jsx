import React, { useEffect, useState } from "react";

const Clock = ()=>{
    const [time, setDate] = useState(0);
   
    useEffect(()=>{
       setInterval(()=>{
           setDate(new Date().toLocaleTimeString())
       },1000);
   },[]) 
    
    return(
        <>
         <div className="container">
          <h1 
          style={{color:'red',backgroundColor:'darkslategrey', width:'120px', padding:'10px',borderRadius:'9px'}}
          >{time}</h1>
         </div>
        </>
    );
}

export default Clock;