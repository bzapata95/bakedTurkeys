import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import Lista from "../../components/Lista";
import Header from "../../components/Header";
import { Booble } from "./styles";
import { AppContainer } from "../../styles";
export default function Main() {
  const [entregas, setEntregas] = useState([]);
  const [total, setTotal] = useState(null);
  const [term, setTerm] = useState("");

  const url = `http://192.168.0.2:3004/entregas?q=${term}&_sort=entregado&_order=asc`;
  useEffect(() => {
    const obtenerEntregas = async () => {
      const { data } = await axios.get(url);
      setEntregas(data);
      const getTotal = data.reduce((total, data) => {
        return (parseFloat(total) + parseFloat(data.adelanto)).toFixed(2);
      }, 0);
      setTotal(getTotal);
    };
    obtenerEntregas();
  }, [url]);

  const handleTotal = result => {
    setTotal(result);
  };

  const handleSearch = result => {
    console.log(term);
    setTerm(result);

    const obtenerEntregas = async () => {
      const { data } = await axios.get(url);
      setEntregas(data);
      const getTotal = data.reduce((total, data) => {
        return (parseFloat(total) + parseFloat(data.adelanto)).toFixed(2);
      }, 0);
      setTotal(getTotal);
    };
    obtenerEntregas();
  };

  return (
    <>
      <AppContainer>
        <Header callback={handleSearch.bind(this)} />
        {total !== null && (
          <Booble>
            {/* <FontAwesomeIcon icon={faDollarSign} /> */}
            <strong>S/.</strong>
            <span>{total}</span>
          </Booble>
        )}

        <div style={{ paddingTop: "56px", paddingBottom: "20px" }}>
          {entregas.map(entrega => (
            <Lista
              key={entrega.id}
              entrega={entrega}
              total={total}
              callback={handleTotal.bind(this)}
            />
          ))}
        </div>
      </AppContainer>
    </>
  );
}
