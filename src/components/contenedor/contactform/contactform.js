import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const defaultForm = { name: '', email: '', telefono: '' };


const ContactForm = () => {
  const [form, setForm] = useState(defaultForm);
  const [id, setId] = useState();

  const changeHandler = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    const db = getFirestore();
    const contactFormCollection = collection(db, 'contactform');
    addDoc(contactFormCollection, form).then((snapshot) => {
      setId(snapshot.id);
    });
  };

  const resetHandler = () => {
    setForm(defaultForm);
    setId('');
  };

  return (
    <div>
      {id ? (
        <div>
            Gracias por relizar su compra, se ha guardado con id {id}
          <button onClick={resetHandler}>Realizar otra compra</button>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              name="name"
              id="name"
              value={form.name}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="telefono">Telefono</label>
            <textarea
              name="telefono"
              id="telefono"
              value={form.telefono}
              onChange={changeHandler}
            ></textarea>
          </div>
          <button>Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
