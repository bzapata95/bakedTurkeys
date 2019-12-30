import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";

export default function Header({ callback }) {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleTerm = e => {
    const term = e.target.value;
    callback(term);
  };
  return (
    <Container>
      <div>
        <div className="busqueda">
          <form onSubmit={handleSubmit}>
            <input
              name="q"
              placeholder="Busqueda"
              autoComplete="off"
              onChange={handleTerm}
            />
          </form>
        </div>
        <div>
          <a href="/">
            <FontAwesomeIcon icon={faSync} color="#000" size="xs" />
          </a>
          <Link to="/registrar">
            <FontAwesomeIcon icon={faPlus} color="#000" size="xs" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
