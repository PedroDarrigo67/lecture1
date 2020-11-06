import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import "./NotesList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function NotesList() {
  const centrales = useSelector((state) => {
    return state.centrales;
  });

  return (
    <>
      <Navbar title="LISTADO CENTRALES" />

      {centrales.entities.map((central) => (
        <details open>
          <summary>
            Central: {central.nombreCentral.nombre} - Fecha de actualizacion: {central.date}
          </summary>
          {central.conos.map((cono) => (
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
                    <Link to={`/central/${central.nombreCentral.nombre}/${cono.id}`}>
                      <VisibilityIcon className="view_icon" />
                    </Link>
                  </td>
                </tbody>
              </Table>
            </div>
          ))}
        </details>
      ))}
    </>
  );
}

export default NotesList;
