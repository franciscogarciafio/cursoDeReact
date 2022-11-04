import React from "react";
import "firebase/firestore";
import { NavLink,Link } from "react-router-dom";
import { useCartContext,} from "../../Context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Button } from "react-bootstrap";



function Cart() {

	const { cart, totalPrice,clearCart,removeProduct } = useCartContext();
	
	  const ClickClear = () => {
		clearCart();
	  };
	
	  const ClickRemove = (product) => {
		removeProduct(product);
	  };

	if (cart.length === 0) {
		return (
		  <div>
			<h2 className="title text-center py-1">
			  Tu carrito se encuentra vacio en este momento{" "}
			</h2>
			<NavLink to="/">
			  {" "}
			  <h2 className="title text-center py-1">Volvemos a la Tienda?</h2>
			</NavLink>
		  </div>
		);
	  }
	
	  return (
		

<div>
		<div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Tus productos seleccionados</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio</th>
        <th scope="col">SubTotal </th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      {cart.map(( product,quantity) => (
        <tr>
          <td>{product.nombre}</td>
          <td>{product.quantity}</td>
          <td>${product.precio}</td>
          <td>${product.precio* product.quantity}</td>
          <td>
            <button onClick={() => ClickRemove(product.id)}>
              <BsFillTrashFill />
            </button>
          </td>
        </tr>
     			 ))}
   			 </tbody>
 		 </table>
		</div>
		
		
			<p>total: {totalPrice()}</p>
			<div>
 			 <button onClick={() => ClickClear()}>
   					 {" "}
   				 Borrar todos los productos
   				 <BsFillTrashFill />{" "}
  				</button>
			</div>
			<Button
  		className="mb-1 mt-1 d-flex justify-content-center"
  				variant="primary"
>
 			 <Link
   				 to={`/checkout`}
   				 style={{ color: "white", textDecoration: "none" }}
  >
    				Finalizar Compra
  				</Link>
			</Button>
	<div className="title text-center py-1">
       <NavLink to="/">
         {" "}
         <h2>Seguimos comprando?</h2>
       </NavLink>
     </div>
	 </div>
			
		
	);
};


export default Cart;
