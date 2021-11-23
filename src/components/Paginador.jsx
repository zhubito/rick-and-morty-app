import React from "react";

const Paginador = (props) => {
  const { info, pagina, cambiaPagina } = props;
  const paginaInt = parseInt(pagina);
  const arraypaginas = [];

  for (let i = paginaInt - 2; i <= info.pages; i++) {
    if (i > 0) {
      arraypaginas.push(i);
    }

    if (arraypaginas.length > 4) {
      //Encontramos los 5 elementos
      break;
    }
  }

  return (
    <nav className="m-3">
      <ul className="pagination justify-content-center">
        <BotonPaginado
          condicional={info.prev}
          valorPagina={1}
          cambiaPagina={cambiaPagina}
          elemento={"<<"}
        />
        <BotonPaginado
          condicional={info.prev}
          valorPagina={paginaInt - 1}
          cambiaPagina={cambiaPagina}
          elemento={"<"}
        />
        {arraypaginas.map((pag) =>
          paginaInt === pag ? (
            <li className="page-item active" key={pag}>
              <span className="page-link bgHoum">
                <span className="sr-only">{pag}</span>
              </span>
            </li>
          ) : (
            <li className="page-item" key={pag}>
              <p
                className="page-link colorHoum"
                onClick={() => cambiaPagina(pag)}
              >
                {pag}
              </p>
            </li>
          )
        )}
        <BotonPaginado
          condicional={info.next}
          valorPagina={paginaInt + 1}
          cambiaPagina={cambiaPagina}
          elemento={">"}
        />
        <BotonPaginado
          condicional={info.next}
          valorPagina={info.pages}
          cambiaPagina={cambiaPagina}
          elemento={">>"}
        />
      </ul>
    </nav>
  );
};

const BotonPaginado = (props) => {
  const { condicional, valorPagina, cambiaPagina, elemento } = props;
  return (
    <li className={condicional !== null ? "page-item" : "page-item disabled"}>
      <span
        className={
          condicional !== null
            ? "page-link colorHoum"
            : "page-link colorDisabled"
        }
        onClick={() => {
          cambiaPagina(valorPagina);
        }}
      >
        {elemento}
      </span>
    </li>
  );
};

export default Paginador;
