import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css";
import "./styles.css";

import axios from "axios";

import { Container, Listado } from "./styles.js";
import { toast } from "react-toastify";

export default function Lista({ entrega, callback, total }) {
  const [item, setItem] = useState(entrega);
  const [give, setGive] = useState(false);
  const [exit, setExit] = useState(false);

  const handleGive = async () => {
    if (window.confirm("¿Estas seguro que se esta entregando?")) {
      const price = item.precio;
      setItem({
        ...item,
        adelanto: price,
        entregado: true,
        cancelado: true,
        salio: true
      });
      const montoTotal = (
        parseFloat(total) +
        (parseFloat(item.precio) - parseFloat(item.adelanto))
      ).toFixed(2);
      callback(montoTotal);
      setGive(true);
    }
  };

  if (give) {
    const update = async () => {
      const data = await axios.patch(
        `http://192.168.0.2:3004/entregas/${item.id}`,
        item
      );
      if (data.status === 200) {
        toast.success("😎 Se entregó");
      }
    };
    update();
    setGive(false);
  }

  const handleDelete = async e => {
    const list = e.target.parentElement.parentElement.parentElement;
    if (window.confirm("¿Estas seguro que quieres eliminar?")) {
      const ifDelete = await axios.delete(
        `http://192.168.0.2:3004/entregas/${item.id}`
      );
      const montoTotal = (
        parseFloat(total) - parseFloat(item.adelanto)
      ).toFixed(2);
      callback(montoTotal);
      if (ifDelete.status === 200) {
        toast.success("😭 Adiós platita, se eliminó correctamente!");
        list.remove();
      }
    }
  };

  const hanldeExit = () => {
    if (window.confirm("¿Seguro/a que ya salió?")) {
      setItem({
        ...item,
        salio: true
      });
      setExit(true);
    }
  };
  if (exit) {
    const updateExit = async () => {
      const data = await axios.patch(
        `http://192.168.0.2:3004/entregas/${item.id}`,
        item
      );
      if (data.status === 200) {
        toast.success("🍗 Se cambió el estado!");
      }
    };
    updateExit();
    setExit(false);
  }

  return (
    <Listado>
      <Swipeout
        right={[
          {
            text: "Eliminar",
            onPress: handleDelete,
            style: { backgroundColor: "#FC4850", color: "white" },
            className: "custom-class-2"
          }
        ]}
        style={{
          borderRadius: "5px",
          margin: "0",
          backgroundColor: "transparent"
        }}
        left={[
          {
            text: "¿Salio?",
            onPress: hanldeExit,
            style: { backgroundColor: "#f8c822", color: "black" },
            className: "custom-class-2"
          }
        ]}
        disabled={item.entregado === true && "disabled"}
      >
        <Container>
          <div className="header">
            <div>
              <div
                className="number"
                style={
                  item.salio
                    ? { backgroundColor: "#00ff7f" }
                    : { backgroundColor: "#efeff1" }
                }
              >
                <p>{item.id}</p>
              </div>
              <div className="name">
                <h3>{item.nombre}</h3>
                <h6>{item.recoje}</h6>
              </div>
            </div>
            <div>
              <h5 className={item.cancelado ? "cancelado" : "nocancelado"}>
                {item.cancelado ? "Cancelado" : "Falta pagar"}
              </h5>
              {item.cancelado === false && (
                <Link to={`/editar/${item.id}`}>Editar</Link>
              )}
            </div>
          </div>
          <div className="body">
            <div>
              <p>{item.descripcion}</p>
            </div>
            <div>
              <p>
                <strong>Costo: </strong>
                <span>S/. {parseFloat(item.precio).toFixed(2)}</span>
              </p>
              <p>
                <strong>Adelanto: </strong>
                <span>S/. {parseFloat(item.adelanto).toFixed(2)}</span>
              </p>
              <p>
                <strong>Restante: </strong>
                <span className="restante">
                  S/. {(item.precio - item.adelanto).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
          <div className="footer">
            <button
              type="button"
              className={item.entregado ? "entregado" : "entregar"}
              onClick={() => handleGive()}
            >
              {item.entregado ? "Entregado" : "Entregar"}
            </button>
          </div>
        </Container>
      </Swipeout>
    </Listado>
  );
}
