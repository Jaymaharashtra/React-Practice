import React from "react";
import { useState } from "react";


const Page1 = () => {

  const [sound, setSound] = useState([]);

  const handleskill=(event)=>{
    console.log(event.target.value , event.target.checked);
    
    if(event.target.checked){
      setSound([...sound, event.target.value]);
    }else{
      setSound([...sound.filter((item)=>item!= event.target.value)] )
    }
  }
  return(
    <>
  <input onChange={handleskill} type="checkbox" id="jbl" value='JBL'/>
  <label htmlFor="jbl">JBL</label>
  <br />
  <input onChange={handleskill} type="checkbox" id="boat" value='Boat'/>
  <label htmlFor="boat">Boat</label>
  <br />
  <input onChange={handleskill} type="checkbox" id="noise" value='Noise'/>
  <label htmlFor="noise">Noise</label>
  <br />

    <h4>{sound.toString()}</h4>
    
    </>
  )
};
export default Page1;
