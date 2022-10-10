import React, {useState,useEffect} from "react";
import ItemDetailContainer from "../itemDetailContainer/itemDetailContainer";
import ItemList from "../itemList/ItemList";
import Title from "../Title/Title";
import {useParams} from "react-router-dom";

const Propiedad = [
        {
    "id": 1,
    "nombre": "casa en alquiler",
    "precio": " 35.000",
    "ubicacion": "Jesus Maria",
    "stock": 1,
    "img":"https://i.ibb.co/xDKrXct/camp2.png",
    "category": "alquiler"        
    },
    {
    "id": 2,
    "nombre": "campo en alquiler",
    "precio": "120.000",
    "ubicacion": "Villa del Totoral",
    "stock": 1,
    "img": "https://i.ibb.co/DRjdCqJ/camp3.png",
    "category": "alquiler"  
    },
    {
    "id": 3,
    "nombre": "Departamento en alquiler",
    "precio": "55.000",
    "ubicacion": "Colonia caroya",
    "stock": 1,
    "img": "https://i.ibb.co/5FY1hdR/ext3.png",
    "category": "alquiler"  
    },
    {
    "id": 4,
    "nombre": "casa en alquiler",
    "ubicacion": "Villa del totoral",
    "precio": "40.000",
    "stock": 1,
    "img": "https://i.ibb.co/QbFC6rZ/exterior1.png",
    "category": "alquiler"  
    },
    {
    "id": 5,
    "nombre": "chalet en elaquiler",
    "precio": "150.000",
    "ubicacion": "Villa del totoral",
    "stock": 1,
    "img": "https://i.ibb.co/z7vxnTB/ext2.png",
    "category": "alquiler"  
    },
    {
    "id": 6,
    "nombre": "terreno en alquiler",
    "precio": "10.000",
    "ubicacion": "Villa del totoral",
    "stock": 1,
    "img": "https://i.ibb.co/RyWL5NX/ext4.png",
    "category": "venta"  
    },
    {
    "id": 7,
    "nombre": "casa en alquiler",
    "precio": "150.000",
    "ubicacion": "Villa del totoral",
    "stock": 1,
    "img": "https://i.ibb.co/z7vxnTB/ext2.png",
    "category": "venta"
     },
     {
    "id": 8,
    "nombre": "campo en alquiler",
    "precio": "200.000",
    "ubicacion": "Villa del totoral",
    "stock": 1,
    "img": "https://i.ibb.co/z7vxnTB/ext2.png",
    "category": "venta"
    },
    {
     "id": 9,
     "nombre": "chalet en elaquiler",
     "precio": "150.000",
     "ubicacion": "Villa del totoral",
     "stock": 1,
     "img": "https://i.ibb.co/z7vxnTB/ext2.png",
     "category": "venta"
    },
    {
    "id": 10,
    "nombre": "chalet en elaquiler",
    "precio": "150.000",
    "ubicacion": "Villa del totoral",
    "stock": 1,
    "img": "https://i.ibb.co/z7vxnTB/ext2.png",
    "category": "venta"
     }
  
];



export const ItemListContainer = ({ texto }) => {
    const [data, setData] = useState([]);
    
    
    

    const { categoriaId } = useParams ();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(Propiedad);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(Propiedad => Propiedad.category === categoriaId)));
        }else{
            getData.then(res => setData(res));
        } 

    },[categoriaId])
 

    return (
        <>
        <Title greeting={texto} />
       
        <ItemList data={data} />
        
        </>
    );
  };
  
  export default ItemListContainer;

