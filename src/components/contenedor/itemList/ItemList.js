import Item from "../item/item";
import React from "react";


const ItemList = ({data =[]}) => {
    return (
        data.map (Propiedad => <Item key={Propiedad.id} info={Propiedad} />)
    );
}

export default ItemList;

