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
        <li className={info.prev !== null ? "page-item" : "page-item disabled"}>
          <span
            className={
              info.prev !== null
                ? "page-link colorHoum"
                : "page-link colorDisabled"
            }
            onClick={() => {
              cambiaPagina(1);
            }}
          >
            {"<<"}
          </span>
        </li>
        <li className={info.prev !== null ? "page-item" : "page-item disabled"}>
          <span
            className={
              info.prev !== null
                ? "page-link colorHoum"
                : "page-link colorDisabled"
            }
            onClick={() => {
              cambiaPagina(paginaInt - 1);
            }}
          >
            {"<"}
          </span>
        </li>
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
        <li className={info.next !== null ? "page-item" : "page-item disabled"}>
          <p
            className={
              info.next !== null
                ? "page-link colorHoum"
                : "page-link colorDisabled"
            }
            onClick={() => cambiaPagina(paginaInt + 1)}
          >
            {">"}
          </p>
        </li>
        <li className={info.next !== null ? "page-item" : "page-item disabled"}>
          <span
            className={
              info.next !== null
                ? "page-link colorHoum"
                : "page-link colorDisabled"
            }
            onClick={() => {
              cambiaPagina(info.pages);
            }}
          >
            {">>"}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Paginador;
