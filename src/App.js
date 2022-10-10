import React from "react";
import { BrowserRouter, Route,Routes, } from "react-router-dom";
import Cart from "./components/contenedor/cart/cart.js";
import ItemDetailContainer from "./components/contenedor/itemDetailContainer/itemDetailContainer.js";
import ItemListContainer from "./components/contenedor/ItemListContainer/itemListContainer.js";
import Navbar from "./components/contenedor/navbar/navbar.js";



export default function App() {
  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/detalle/:detalleId" element={<ItemDetailContainer />} />
    </Routes>
   </BrowserRouter>
    
     
    
  );
}


