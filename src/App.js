import React from "react";
import { BrowserRouter, Route,Routes, } from "react-router-dom";
import ContactForm from "./components/contactform/contactform.js";
import Cart from "./components/contenedor/cart/cart.js";
import ItemDetailContainer from "./components/contenedor/itemDetailContainer/itemDetailContainer.js";
import ItemListContainer from "./components/contenedor/ItemListContainer/itemListContainer.js";
import Navbar from "./components/contenedor/navbar/navbar.js";
import CartProvider from "./components/Context/CartContext.js";


export default function App() {
  return (
   <BrowserRouter>
   <CartProvider>
   <Navbar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/contactanos" element={<ContactForm />} />
      <Route exact path="/detalle/:detalleId" element={<ItemDetailContainer />} />
    </Routes>
    </CartProvider>
   </BrowserRouter>
    
     
    
  );
}


