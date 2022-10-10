import React from "react";
import "./itemDetail.css"
import ItemCount from "../itemCount/ItemCount";

export const ItemDetail = ({data}) => {
	const onAdd = (quantity) => {
		//console.log (compraste ${quantity} unidades);

	}
    return(
		
        <div className="container">
		<div className="detail">
			<img className="detail__image" src={data.img} alt="" />
			<div className="content">
				<h1>{data.nombre}</h1>
				<ItemCount initial={1} stock={5} onAdd={onAdd} />
			</div>
		</div>
	</div>
    )
}

export default ItemDetail;
