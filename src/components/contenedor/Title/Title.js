import React from "react";
import ItemCount from "../itemCount/ItemCount";


export const Title = (props) => {

    const onAdd = (quantity) => {
        //console.log (compraste ${quantity} unidades);
    }
    
    return (
        <> Bienvenidos a Garcia Fio Servicios Inmobiliarios!!
            {props.greeting}
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    );
  };
  
  export default Title;