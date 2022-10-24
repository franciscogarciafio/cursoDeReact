import React from "react";
import { BiCart } from "react-icons/bi";
import { useCartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <>
    <BiCart />
    <span>{totalProducts() || ""}</span>
    </>
  )
}


export default CartWidget;









  
  
  
  
  
  
  
  
  
  








