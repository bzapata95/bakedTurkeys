import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import axios from "axios";

// import { Container } from './styles';
import Header from "../../components/Header";
import { Container, Form, Title } from "../Register/styles";
import { withRouter } from "react-router-dom";

function Editar({ id, history }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://192.168.0.2:3004/entregas/${id}`
      );
      setItem({ ...data });
    };
    getData();
  }, [id]);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await axios.patch(
        `http://192.168.0.2:3004/entregas/${item.id}`,
        item
      );

      if (data.status === 200) {
        toast.success("🔥🤑 Editado correctamente");
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
          Edita el pavito o chanchito!{" "}
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
              defaultValue={item.nombre}
            />
            <label>Recoje?: </label>
            <input
              type="text"
              name="recoje"
              placeholder="Nombre del que recoje"
              autoComplete="off"
              onChange={handleChange}
              defaultValue={item.recoje}
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
                  defaultValue={item.precio}
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
                  defaultValue={item.adelanto}
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
              defaultValue={item.descripcion}
            />
            <label className="check">
              <input
                type="checkbox"
                name="cancelado"
                checked={item.cancelado}
                onChange={handleCanceled}
              />
              <span>¿Dejará cancelado?</span>
            </label>
            <button type="submit">Editar registro</button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default withRouter(Editar);
