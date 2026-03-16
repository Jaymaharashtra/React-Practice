import { useState } from "react";

function Radio(){

    const [gender , setGender] = useState();

    return(
        <>
        <h4>Selcte Gender : </h4>

        <select onChange={(e)=>{setGender(e.target.value)}}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>

        </select>
        <h4>Gender : {gender}</h4>
        </>
    );
}

export default Radio;