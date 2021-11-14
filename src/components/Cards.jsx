import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { results } = props;
  return (
    <div className="container">
      <div className="row g-4">
        {results.map((person) => (
          <div key={person.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Card>
              <Link to={`/buscador/${person.id}`}>
                <Card.Img variant="top" src={person.image} />
              </Link>
              <Card.Body>
                <Card.Title className="colorHoum">{person.name}</Card.Title>
                <Card.Text>
                  <b>Estado:</b>{" "}
                  {person.status === "Alive"
                    ? "Vivo"
                    : person.status === "Dead"
                    ? "Muerto"
                    : "Desconocido"}
                  <br />
                  <b>Genero:</b>{" "}
                  {person.gender === "Male"
                    ? "Masculino"
                    : person.gender === "Female"
                    ? "Femenino"
                    : "Desconocido"}
                </Card.Text>
                <Link to={`/buscador/${person.id}`}>
                  <Button className="btn buttonHoum">Ver detalle</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
