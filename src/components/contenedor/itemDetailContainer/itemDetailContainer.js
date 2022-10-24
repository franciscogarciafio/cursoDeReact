import React, {useEffect, useState} from "react";
import ItemDetail from "../itemDetail/itemDetail";
import {useParams} from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    const { detalleId } = useParams ();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "productos", detalleId);
        getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
    }, [detalleId]);
   

    return(
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;
