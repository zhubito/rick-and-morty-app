import React from "react";
import { Form, FormControl, Row, Col } from "react-bootstrap";

const Filtro = (props) => {
  const { setParametrosFiltro, parametrosFiltro, recargaConsulta } = props;

  const submit = (e) => {
    e.preventDefault();
    recargaConsulta();
  };
  return (
    <div className="container my-3">
      <Form onSubmit={submit}>
        <Row>
          <Col xs={12} md={6}>
            <FormControl
              aria-label="Texto busqueda"
              placeholder="Busca por Nombre"
              onChange={(event) =>
                setParametrosFiltro({
                  ...parametrosFiltro,
                  nombre: `&name=${event.target.value}`,
                })
              }
            />
          </Col>
          <Col xs={12} md={2}>
            <Form.Select
              aria-label="select status"
              onChange={(event) =>
                setParametrosFiltro({
                  ...parametrosFiltro,
                  estado: `&status=${event.target.value}`,
                })
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
                setParametrosFiltro({
                  ...parametrosFiltro,
                  genero: `&gender=${event.target.value}`,
                })
              }
            >
              <option value="">Busca por genero</option>
              <option value="Female">Femenino</option>
              <option value="Male">Masculino</option>
              <option value="Unknown">Desconocido</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={2}>
            <input
              type="submit"
              value="Buscar"
              className="btn buttonHoum w-100"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Filtro;
