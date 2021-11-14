import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="colorHoum mt-4 text-center">
      <h2>Oh, lo sentimos, esta página no pudo ser encontrada.</h2>
      <h4 className="text-muted mt-4">Quizás quieras:</h4>
      <Link className="nav-link" to="/buscador">
        <button type="button" className="btn buttonHoum">
          Ir al Buscador
        </button>
      </Link>
      <Link className="nav-link" to="/">
        <button type="button" className="btn buttonHoum">
          Volver al Inicio
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
