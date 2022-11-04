import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import "firebase/firestore";
import { Link } from "react-router-dom";
import { CheckoutDetail } from "./CheckoutDetail";
import { CkeckoutSuccess } from "./CkeckoutSuccess";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Button, Form } from "react-bootstrap";

 const Checkout = () => {
  const [loading, setLoading] = useState(true);
  // const [showError, setShowError] = useState(false)
  const [validUser, setValidUser] = useState(false);

  const [orderId, setOrderId] = useState(0);

  const { cart, clearCart, totalPrice } = useContext(CartContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [validUser]);

  const [values, setValues] = useState({
    name: "",
    tel: "",
    email: "",
    emailCheck: "",
  });

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const checkUser = () => {
    if (
      values.name !== "" &&
      values.tel !== "" &&
      values.email !== "" &&
      values.emailCheck !== ""
    ) {
      if (values.email === values.emailCheck) {
        setLoading(true);
        setValidUser(true);
        return;
      }
    }
    // setShowError(true)
    // setTimeout(()=>setShowError(false), 5000)
  };

  const handleSetOrder = () => {
    const order = {
      buyer: values,
      item: cart,
      total: totalPrice(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    clearCart();
  };

  return (
    <div >
      {loading ? (
        <h1 className="mt-0 vh-50 row justify-content-center align-items-center">
          Cargando Producto...
        </h1>
      ) : (
        <>
          {orderId ? (
            <>
              {typeof orderId === "string" ? (
                <CkeckoutSuccess order={orderId} />
              ) : (
                "Fallo La orden"
              )}
            </>
          ) : (
            <>
              {!validUser ? (
                <div>
                  <div className="title text-center py-1">
                    <h1>Datos Personales</h1>
                  </div>
                  <Form>
                    <legend>
                      Completa con tus datos para completar la orden
                    </legend>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Escribe tu nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Tu Nombre aqui..."
                        autoComplete="off"
                        value={values.name}
                        onChange={handleInputChange}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Escribe tu Teléfono</Form.Label>
                      <Form.Control
                        type="tel"
                        name="tel"
                        className="buyer-input"
                        placeholder="Teléfono"
                        autoComplete="off"
                        value={values.tel}
                        onChange={handleInputChange}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Escribe tu Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        className="buyer-input"
                        placeholder="Email"
                        autoComplete="off"
                        value={values.email}
                        onChange={handleInputChange}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Escribe tu Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="emailCheck"
                        className="buyer-input"
                        placeholder="Repite tu email"
                        autoComplete="off"
                        value={values.emailCheck}
                        onChange={handleInputChange}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={checkUser}>
                      Confirmar
                    </Button>
                  </Form>

                  <div className="title text-center py-1">
                    <Link to={"/cart"}>
                      <h4>Volver al carrito</h4>
                    </Link>
                  </div>
                </div>
              ) : (
                <CheckoutDetail
                  buyer={values}
                  setValid={setValidUser}
                  handleOrder={handleSetOrder}
                />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;