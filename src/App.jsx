import React, { useState } from "react";
import Header from "./assets/component/Header";
import Footer from "./assets/component/Footer";

import Clock from "./assets/component/Clock";

const App = () => {

  const [color, setColor] = useState('red');
   
  return (
    <div>
<Header/>
    <select onChange={(event)=>{setColor(event.target.value)}}>
      <option value={'red'}>Red</option>
      <option value={'blue'}>Blue</option>
      <option value={'purple'}>Purple</option>
      <option value={'yellow'}>Yellow</option>
    </select>
     <Clock color={color} />
      <Footer/>
    </div>
  );
};

export default App;
