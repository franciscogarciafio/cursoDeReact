import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'


export const CheckoutDetail = ({buyer, setValid, handleOrder}) => {

    const {cart, totalPrice} = useContext(CartContext)  // yo lo tengo como items.

    return (
        <div>
                    <div>
                        <h4>Datos del comprador</h4>
                        <ul>
                            <li key="name">Nombre: {buyer.name}</li>
                            <li key="tel">Teléfono: {buyer.tel}</li>
                            <li key="email">Email: {buyer.email}</li>
                        </ul>
                        <hr/>
                        <h4>Detalle de compra</h4>
                        <ul>
                            {cart.map((product) => <li key={product.id}>{product.nombre} x {product.quantity}</li>)}
                        </ul>
                        <hr/>
                        <p>Total a pagar: <span>${totalPrice()}</span></p>
                    </div>
                    
                    <div>
                        <button onClick={()=> setValid(false)}>Modificar datos</button>
                        <button onClick={handleOrder}>Confirmar compra</button>
                    </div>
                </div>
    )
}
