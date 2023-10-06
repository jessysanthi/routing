import React, {} from "react";



import { BrowserRouter as Router,Route,Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Product from "./components/Product.js";
import About from "./components/About.js";

import Conatct from "./components/Contact.js";


function App() { 
  return (
    <BrowserRouter>
  
        <Header/>
        
         
  <Routes>
<Route path="/"Component={Home}/>
<Route  path="/Home" Component={Home}/>
<Route path="/Product" Component={Product}/>

<Route path="/Contact" Component={Conatct}/>
<Route path="/About" Component={About}/>



</Routes>

</BrowserRouter>
  
  );
  
  
}

export default App;
