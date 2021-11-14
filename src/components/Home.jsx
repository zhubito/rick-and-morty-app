import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="mt-5 ">
        <h3 className="text-muted">
          Hola, mi nombre es Nicolás Pérez y aquí verás el consumo con React de
          la API:
        </h3>
        <h2 className="mt-5 hrefHoum text-center">
          {<a href="https://rickandmortyapi.com/">Rick And Morty</a>}
        </h2>
        <h3 className="mt-5 text-muted">
          Especificamente, la función de personajes.
        </h3>
        <h4 className="text-muted mt-5">
          Busca a tus personajes presionando en la pestaña de <b>"Buscador"</b>.
        </h4>

        <h4 className="text-muted mt-5">O con el siguiente botón:</h4>
        <Link className="nav-link mt-3 text-center" to="/buscador">
          <button type="button" className="btn buttonHoum">
            Ir al Buscador
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
