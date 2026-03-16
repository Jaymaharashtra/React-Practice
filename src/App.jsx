import React, { useState } from "react";
import Header from "./assets/component/Header";
import Footer from "./assets/component/Footer";
import Page1 from "./assets/component/Page1";
import Radio from "./assets/component/radio";
import Record from "./assets/component/Record";

const App = () => {

   
  return (
    <div>
      <Header/>
      <Page1 />
      {/* <Radio /> */}
      <Record />
      <Footer/>
    </div>
  );
};

export default App;
