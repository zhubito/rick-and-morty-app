import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detalle = () => {
  let params = useParams();
  const id = params.id;

  const [personaje, setPersonaje] = useState(null);

  async function obtenerPersonaje(id) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    const encontrado = await response.json();
    setPersonaje(encontrado);
  }
  useEffect(() => {
    obtenerPersonaje(id);
  }, [id]);
  return personaje == null ? (
    <div className="container text-center w-100 mt-5">
      <div class="colorHoum spinner-border">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <h3 class="colorHoum">Cargando...</h3>
    </div>
  ) : (
    <div className="container mt-4">
      <div className="card float-left">
        <div className="row ">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="card-block m-4">
              <h1 className="colorHoum">{personaje.name}</h1>
              <h4>
                Genero:{" "}
                {personaje.gender === "Male"
                  ? "Masculino"
                  : personaje.gender === "Female"
                  ? "Femenino"
                  : "Desconocido"}
              </h4>
              <h4>Especie: {personaje.species}</h4>
              <h4>
                Estado:{" "}
                {personaje.status === "Alive"
                  ? "Vivo"
                  : personaje.status === "Dead"
                  ? "Muerto"
                  : "Desconocido"}
              </h4>
              <h4>Cantidad de episodios: {personaje.episode.length}</h4>
              <h4>
                Localización:{" "}
                {personaje.location ? personaje.location.name : "Desconocida"}
              </h4>
              <h4>
                Origen:{" "}
                {personaje.origin.url ? personaje.origin.name : "Desconocido"}
              </h4>
            </div>
          </div>

          <div className=" col-md-6 col-sm-12 col-xs-12">
            <img
              className="d-block w-100 rounded-circle p-5"
              src={personaje.image}
              alt="imagen personaje"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
