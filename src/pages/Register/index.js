import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../../components/Header";
import { Container, Form, Title } from "./styles";

function Register({ history }) {
  const initialState = {
    nombre: "",
    recoje: "",
    precio: "",
    adelanto: 0,
    descripcion: "",
    cancelado: false,
    entregado: false,
    salio: false
  };

  const [item, setItem] = useState(initialState);
  const [disable, setDisable] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setDisable(true);
    try {
      const data = await axios.post("http://192.168.0.2:3004/entregas", item);

      if (data.status === 201) {
        toast.success("🔥🤑 Registrado correctamente");
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };
  const handleCanceled = () => {
    setItem({
      ...item,
      cancelado: !item.cancelado,
      adelanto: item.precio
    });
  };

  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: "70px",
          paddingLeft: "12px",
          paddingRight: "12px"
        }}
      >
        <Title>
          Registrar nuevo pavito o chanchito!{" "}
          <span role="img" aria-label="sheep">
            😜✨🎇
          </span>
        </Title>
        <Container>
          <Form onSubmit={handleSubmit}>
            <label>Nombres: </label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del cliente"
              autoComplete="off"
              onChange={handleChange}
              value={item.nombre}
              autoFocus
            />
            <label>Recoje?: </label>
            <input
              type="text"
              name="recoje"
              placeholder="Nombre del que recoje"
              autoComplete="off"
              onChange={handleChange}
              value={item.recoje}
            />
            <div className="precios">
              <div>
                <label>Precio: </label>
                <input
                  type="number"
                  name="precio"
                  placeholder="Precio"
                  autoComplete="off"
                  onChange={handleChange}
                  value={item.precio}
                />
              </div>
              <div>
                <label>Adelanto: </label>
                <input
                  type="number"
                  name="adelanto"
                  placeholder="Adelanto"
                  autoComplete="off"
                  onChange={handleChange}
                  value={item.adelanto}
                />
              </div>
            </div>
            <label>Descripción: </label>
            <input
              type="text"
              name="descripcion"
              multiple
              placeholder="Descripción ..."
              autoComplete="off"
              onChange={handleChange}
              value={item.descripcion}
            />
            <label className="check">
              <input
                type="checkbox"
                name="cancelado"
                onChange={handleCanceled}
              />
              <span>¿Dejará cancelado?</span>
            </label>
            <button type="submit" disabled={disable}>
              {disable ? "Cargando..." : "Enviar registro"}
            </button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default withRouter(Register);
