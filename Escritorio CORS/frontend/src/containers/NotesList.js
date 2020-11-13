import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SpinnerLoad from "../components/SpinnerLoad";
import "./NotesList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function NotesList() {
  const centrales = useSelector((state) => {
    return state.centrales;
  });

  let obtenerNombreCentrales = centrales.entities.nombres;
  let obtenerConos = centrales.entities.conos;
  let obtenerArrayFechas = obtenerConos.map(arrayFechas => (arrayFechas.date))
  

  console.log(obtenerConos)

  return (
    <>
      <Navbar title="LISTADO CENTRALES" />
      {obtenerNombreCentrales === null || undefined ? (
        <details open>
          <summary style={{ color: "red" }}>
          {centrales.fetchListErrorMessage}
          </summary>
        </details>
      ) : (
        obtenerNombreCentrales.map((nombreCentral) => (
          <details open>
            <summary>
              Central: {nombreCentral} - Fecha de actualización: {obtenerArrayFechas}
            </summary>
            {obtenerConos === undefined || null ? (
              <SpinnerLoad />
            ) : (
              obtenerConos.map((cono) => (
                <div className="faq__content">
                  <Table
                    striped
                    bordered
                    variant="light"
                    responsive="sm"
                    size="lg"
                    style={{
                      width: "75%",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <thead key={cono}>
                      <tr>
                        <th>idComunicador</th>
                        <th>IMEI</th>
                        <th>Descripcion</th>
                        <th>codPanel</th>
                        <th>idMesh</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody key={cono.id}>
                      <td>{cono.idComunicador}</td>
                      <td>{cono.idMesh}</td>
                      <td>{cono.descripcion}</td>
                      <td>{cono.codPanel}</td>
                      <td>{cono.idMesh}</td>
                      <td>
                        <Link to={`/central/${nombreCentral}/${cono.id}`}>
                          <VisibilityIcon className="view_icon" />
                        </Link>
                      </td>
                    </tbody>
                  </Table>
                </div>
              ))
            )}
          </details>
        ))
      )}
    </>
  );
}

export default NotesList;
