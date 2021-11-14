import React, { useState } from "react";
import Filtro from "./Filtro";
import Grilla from "./Grilla";

const Buscador = () => {
  const [nombreFiltro, setNombreFiltro] = useState("");
  const [generoFiltro, setGeneroFiltro] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("");
  const [filtro, setFiltro] = useState("?page=1");
  const [pagina, setPagina] = useState(1);

  const recargaConsulta = () => {
    let filter = `?page=1${nombreFiltro}${generoFiltro}${estadoFiltro}`;
    setPagina(pagina);
    setFiltro(filter);
  };
  return (
    <>
      <Filtro
        nombreFiltro={nombreFiltro}
        generoFiltro={generoFiltro}
        estadoFiltro={estadoFiltro}
        setNombreFiltro={setNombreFiltro}
        setGeneroFiltro={setGeneroFiltro}
        setEstadoFiltro={setEstadoFiltro}
        recargaConsulta={recargaConsulta}
      />
      <Grilla
        nombreFiltro={nombreFiltro}
        generoFiltro={generoFiltro}
        estadoFiltro={estadoFiltro}
        filtro={filtro}
        setFiltro={setFiltro}
        pagina={pagina}
        setPagina={setPagina}
      />
    </>
  );
};

export default Buscador;
