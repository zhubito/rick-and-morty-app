import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Paginador from "./Paginador";

const Grilla = (props) => {
  const {
    nombreFiltro,
    generoFiltro,
    estadoFiltro,
    filtro,
    setFiltro,
    pagina,
    setPagina,
  } = props;

  const [results, setResults] = useState(null);
  const [info, setInfo] = useState(null);
  const [sinResultados, setSinResultados] = useState(false);

  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetch(`${url}${filtro}`)
      .then((res) => res.json())
      .then((personajes) => {
        if (personajes.error) {
          setSinResultados(true);
          return;
        }
        setSinResultados(false);
        setInfo(personajes.info);
        setResults(personajes.results);
      })
      .catch((e) => console.log(e));
  }, [filtro]);

  const cambiaPagina = (pagina) => {
    let filter = `?page=${pagina}${nombreFiltro}${generoFiltro}${estadoFiltro}`;
    setPagina(pagina);
    setFiltro(filter);
  };

  if (sinResultados === true) {
    return (
      <div className="container text-center mt-5">
        <h1 className="colorHoum">Búsqueda sin resultados...</h1>
      </div>
    );
  }

  return results === null || info === null ? (
    <div className="container">
      <h1 className="colorHoum">Buscando...</h1>
    </div>
  ) : (
    <div className="container">
      <div className="bgHoum p-1 mb-2 text-white rounded-pill fs-4 text-center">
        Resultados: {info.count}
      </div>
      <Cards results={results} />
      <Paginador info={info} pagina={pagina} cambiaPagina={cambiaPagina} />
    </div>
  );
};

export default Grilla;
