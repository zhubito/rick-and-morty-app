import React, { useState } from "react";
import Filtro from "./Filtro";
import Grilla from "./Grilla";

const Buscador = () => {
  const [parametrosFiltro, setParametrosFiltro] = useState({
    nombre: "",
    genero: "",
    estado: "",
  });
  const [filtro, setFiltro] = useState("?page=1");
  const [pagina, setPagina] = useState(1);

  const recargaConsulta = () => {
    let filter = `?page=1${parametrosFiltro.nombre}${parametrosFiltro.genero}${parametrosFiltro.estado}`;
    setPagina(pagina);
    setFiltro(filter);
  };
  return (
    <>
      <Filtro
        parametrosFiltro={parametrosFiltro}
        setParametrosFiltro={setParametrosFiltro}
        recargaConsulta={recargaConsulta}
      />
      <Grilla
        parametrosFiltro={parametrosFiltro}
        filtro={filtro}
        setFiltro={setFiltro}
        pagina={pagina}
        setPagina={setPagina}
      />
    </>
  );
};

export default Buscador;
