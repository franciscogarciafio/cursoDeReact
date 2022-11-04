import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CkeckoutSuccess = ({ order }) => {
  return (
    <div>
      <div className="title text-center py-1">
        <h2>¡Su orden ha sido procesada exitosamente!</h2>
      </div>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>El código de su compra es :</Card.Title>
          <br />
          <Card.Subtitle className="mb-2 text-muted">{order}</Card.Subtitle>
          <br />
          <Card.Text>
            Asegúrese de guardarlo será requerido a la hora de entregar sus
            productos
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="title text-center py-1">
        <h2>¡Gracias por su compra!</h2>
      </div>

      <div className="title text-center py-1">
        <Link to="/">
          <h2>Volver a la tienda</h2>
        </Link>
      </div>
    </div>
  );
};
