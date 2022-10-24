import React, {useState,useEffect} from "react";
import ItemList from "../itemList/ItemList";
import Title from "../Title/Title";
import {useParams} from "react-router-dom";
import { collection, getDocs, getFirestore,query,where } from "firebase/firestore";



export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams ();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productos");
        if (categoriaId) {
            const queryFilter = query(
                queryCollection,
                where("category", "==",categoriaId),
            );
        getDocs(queryFilter).then((res) =>
                setData(
                    res.docs.map((productos) => ({ 
    id: productos.id, ...productos.data
    () })),
                ),
            );
        } else {
            getDocs(queryCollection).then((res) =>
                setData(
                    res.docs.map((productos) => ({ 
    id: productos.id, ...productos.data
    () })),
                ),
            );
        }
 
    },[categoriaId]);
 

    return (
        <>
        <Title greeting={texto} />
       
        <ItemList data={data} />
        
        </>
    );
  };
  
  export default ItemListContainer;

