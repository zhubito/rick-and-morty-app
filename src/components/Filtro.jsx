import React from "react";
import { Form, FormControl, Row, Col } from "react-bootstrap";

const Filtro = (props) => {
  const { setNombreFiltro, setGeneroFiltro, setEstadoFiltro, recargaConsulta } =
    props;

  const submit = (e) => {
    e.preventDefault();
    recargaConsulta();
  };
  return (
    <div className="container my-3">
      <Form onSubmit={submit}>
        <Row>
          <Col xs={12} md={7}>
            <FormControl
              aria-label="Texto busqueda"
              placeholder="Busca por Nombre"
              onChange={(event) => {
                setNombreFiltro(`&name=${event.target.value}`);
              }}
            />
          </Col>
          <Col xs={12} md={2}>
            <Form.Select
              aria-label="select status"
              onChange={(event) =>
                setEstadoFiltro(`&status=${event.target.value}`)
              }
            >
              <option value="">Busca por estado</option>
              <option value="Alive">Vivo</option>
              <option value="Dead">Muerto</option>
              <option value="Unknown">Desconocido</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={2}>
            <Form.Select
              aria-label="select gender"
              onChange={(event) =>
                setGeneroFiltro(`&gender=${event.target.value}`)
              }
            >
              <option value="">Busca por genero</option>
              <option value="Female">Femenino</option>
              <option value="Male">Masculino</option>
              <option value="Unknown">Desconocido</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={1}>
            <input
              type="submit"
              value="Buscar"
              className="btn btn-danger bgHoum"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filtro;
