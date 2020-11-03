import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import "./NotesList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function NotesList() {
  const lista = useSelector((state) => {
    return state.lista;
  });

  console.log(lista.entities)


  return (
    <>
      {/* <Navbar title="LISTADO CENTRALES" />

      <details open>
        {lista.entities.centralNombre.map((nombre) => (
          <summary>
            Central {nombre.nombreCentral}
            <h1>Fecha de actualizacion: {lista.entities.date}</h1>
          </summary>
        ))}
        {lista.entities.conos.map((cono) => (
          <div className="faq__content">
            <Table
              striped
              bordered
              variant="light"
              responsive="sm"
              size="lg"
              style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
            >
              <thead key={cono}>
                <tr>
                  <th>Cono ID</th>
                  <th>idComunicador</th>
                  <th>IMEI</th>
                  <th>Descripcion</th>
                  <th>codPanel</th>
                  <th>idMesh</th>
                  <th>Detalles</th>
                </tr>
              </thead>
              <tbody key={cono.id}>
                <td>{cono.id}</td>
                <td>{cono.idComunicador}</td>
                <td>{cono.imei}</td>
                <td>{cono.descripcion}</td>
                <td>{cono.codPanel}</td>
                <td>{cono.idMesh}</td>
                <td>
                  <Link to={`/data/${cono.id}`}>
                    <VisibilityIcon className="view_icon" />
                  </Link>
                </td>
              </tbody>
            </Table>
          </div>
        ))}
      </details> */}
    </>
  );
}

export default NotesList;
