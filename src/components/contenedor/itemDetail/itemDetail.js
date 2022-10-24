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
				
				{
				goToCart 
				? <Link to="/cart"> Terminar al carrito</Link>
				 :<ItemCount initial={1} stock={data.stock} onAdd={onAdd}  />
				 
				}
			</div>
			<h1>cantidad de dias</h1>
		</div>
	</div>
    )
}

export default ItemDetail;
