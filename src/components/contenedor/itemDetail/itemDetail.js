import React, {useState}from "react";
import "./itemDetail.css"
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";



export const ItemDetail = ({data}) => {

	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
	setGoToCart(true);
	addProduct(data, quantity);
}


    return(
		
        <div className="container">
		<div className="detail">
			
			<img className="detail__image" src={data.img} alt="" />
			<div className="content">
			<h1>{data.nombre}</h1>
			<p>Precio: ${data.precio}</p> 
 			<p>Ubicacion: {data.ubicación}</p>
 			<p>categoria: {data.category}</p>
			 <p> {data.valor}</p>
				{
				goToCart 
				? <Link to="/cart"> Terminar al carrito</Link>
				 :<ItemCount initial={1} stock={data.stock} onAdd={onAdd}  />
				 
				}
			</div>
			
		</div>
	</div>
    )
}

export default ItemDetail;
