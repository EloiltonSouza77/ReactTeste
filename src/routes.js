import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./conteiner/Home";
import Usuario from "./conteiner/Usuario";

function routes (){
    return(
   <Router>
       <Routes>
       <Route exact path="/" Component={Home}/>
       <Route exact path="/Usuario" Component={Usuario}/>    
   
      </Routes>
   </Router>
    )
   
   
   }
   
   export default routes