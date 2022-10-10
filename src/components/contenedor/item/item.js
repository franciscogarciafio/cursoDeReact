import "./item.css";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({info}) => {
    return (
        <Link to= {`/detalle/${info.id}`} className="Propiedad">
            <img src= {info.img}alt="" />
            <p>{info.nombre}</p>
            <p>Precio: ${info.precio}</p>
            <p>categoria: {info.category}</p>

        </Link>
        
    )

}

export default Item;
