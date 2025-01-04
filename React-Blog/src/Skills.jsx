import { useState } from "react";

function Skills(){
   
    const [skill,setSkill] = useState([]);


   const handleSkill = (event)=>{
        // console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkill([...skill,event.target.value]);
        }
        else{
            setSkill([...skill.filter((item)=>item!=event.target.value)]);
        }
   }
    return(
        <>
        
            <input type="checkbox" onChange={handleSkill} value={"PHP"} id="php"></input>
            <label htmlFor="php">PHP</label>
            <br></br>
            <input type="checkbox" onChange={handleSkill} value={"JS"} id="js"></input>
            <label htmlFor="js">JS</label>
            <br />
            <input type="checkbox" onChange={handleSkill} value={"JAVA"} id="java"></input>
            <label htmlFor="java">JAVA</label>
            <br />
            <input type="checkbox" onChange={handleSkill} value={"PYTHON"} id="python"></input>
            <label htmlFor="python">PYTHON</label>
        

        <h3>{skill.toString()}</h3>
        </>
    );
}

export default Skills;