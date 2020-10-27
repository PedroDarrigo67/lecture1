import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Spinner, Collapse } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { cleanErrorMsgList } from "../state/actions/conosActions";
import ErrorMessageModal from "../components/ErrorMessageModal";
import "./NotesList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

function NotesList() {
  const lista = useSelector((state) => {
    return state.lista;
  });

  var centralNombre = window.centralesInfo;

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  if (lista.isFetching) {
    return (
      <Spinner
        style={{ marginLeft: "50%", marginTop: "25%" }}
        animation="grow"
        variant="secondary"
      />
    );
  }

  const handleClearErrorMessage = () => {
    dispatch(cleanErrorMsgList());
  };

  if (lista.isFetching) {
    return (
      <Spinner
        style={{
          marginLeft: "50%",
          marginRight: "50%",
          marginTop: "auto",
          width: "250px",
          height: "250px",
          opacity: "0.5",
        }}
        animation="grow"
        variant="secondary"
      />
    );
  }

  return (
    <>
      <h2
        className="title"
        style={{
          color: "black",
          textAlign: "center",
          backgroundColor: "#F6FFD5",
          padding: "0.5em",
        }}
      >
        Listado de conos - Server oficina
      </h2>

      <ErrorMessageModal
        visible={lista.fetchListErrorMessage != null}
        errorMessage={lista.fetchListErrorMessage}
        handleClose={handleClearErrorMessage}
      />
      <p></p>
      <details open>
        {centralNombre.map((central) => (
          <summary>
            Central {central.nombre} - Fecha: {lista.date}
          </summary>
        ))}

        {lista.entities.map((lista) => (
          <div className="faq__content">
            <Table
              striped
              bordered
              variant="light"
              responsive="sm"
              size="lg"
              style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
            >
              <thead>
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
              <tbody key={lista.id}>
              <td>{lista.id}</td>
                <td>{lista.idComunicador}</td>
                <td>{lista.imei}</td>
                <td>{lista.descripcion}</td>
                <td>{lista.codPanel}</td>
                <td>{lista.idMesh}</td>
                <td><VisibilityIcon className="view_icon" /></td>
              </tbody>
            </Table>
          </div>
        ))}
      </details>
      {/* <div className="div-table">
        <Table
          striped
          variant="light"
          responsive="sm"
          size="lg"
          style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
        >

          <thead>
            <tr>
              <th></th>
              <th>CENTRAL</th>
              <th>ULTIMA ACTUALIZACION</th>
              <th>DETALLES</th>
            </tr>
          </thead>
          {lista.entities.map((lista) => (
            <tbody key={lista.id}>
              <tr>
                <td>
                  <button
                    className="btn btn-default btn-xs"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <VisibilityIcon />
                  </button>
                  <Collapse in={open}>
                    <p style={{marginLeft: "2.5rem"}}id="example-collapse-text">Hola</p>
                  </Collapse>
                </td>
                <td>{lista.id}</td>
                <td>{lista.idComunicador}</td>
                <td>
                  <p style={{ fontWeight: "650" }}>Fecha {lista.date}</p>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div> */}
    </>
  );
}

export default NotesList;
