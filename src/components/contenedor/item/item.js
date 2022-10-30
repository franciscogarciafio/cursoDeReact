import "./item.css";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({info}) => {
    return (
        <Link to= {`/detalle/${info.id}`} className="Propiedad">
            <p>{info.nombre}</p>
            <img src= {info.img}alt="imagen de propiedad" />
            <p>Precio: ${info.precio}</p> 
            <p>Ubicacion: {info.ubicación}</p>
            <p>categoria: {info.category}</p>
            <p> {info.valor}</p>

        </Link>
        
    )

}

export default Item;
