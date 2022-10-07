import React from "react";
import { BrowserRouter, Route,Routes, } from "react-router-dom";
import Navbar from "./components/contenedor/navbar/navbar.js";
import Home from "./components/rutes/Home.js";
import People from "./components/rutes/Propiedades.js";
import PeopleId from "./components/rutes/PropiedadesId.js";


export default function App() {
  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/people" element={<People />} />
      <Route exact path="/people/:id" element={<PeopleId />} />
    </Routes>
   </BrowserRouter>
    
     
    
  );
}


