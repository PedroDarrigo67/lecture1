import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

function NoteDetails() {
  const currentCentral = useSelector((state) => state.centrales.currentCono);

  return (
    <>
      <Navbar title="DETALLES" />

      {currentCentral.map((cono) => (
        <ListGroup
          horizontal="true"
          variant="flush"
          style={{ color: "black", marginLeft: "1rem", marginRight: "1rem" }}
        >
          <ListGroup.Item>imei: {cono.imei}</ListGroup.Item>
          <ListGroup.Item>idComunicador: {cono.idComunicador}</ListGroup.Item>
          <ListGroup.Item>descripcion: {cono.descripcion}</ListGroup.Item>
          <ListGroup.Item>key: {cono.key}</ListGroup.Item>
          <ListGroup.Item>keyNueva: {cono.keyNueva}</ListGroup.Item>
          <ListGroup.Item>codPanel: {cono.codPanel}</ListGroup.Item>
          <ListGroup.Item>receptorTel: {cono.receptorTel}</ListGroup.Item>
          <ListGroup.Item>lineaTel: {cono.lineaTel}</ListGroup.Item>
          <ListGroup.Item>habilitada: {cono.habilitada}</ListGroup.Item>
          <ListGroup.Item>telefono: {cono.telefono}</ListGroup.Item>
          <ListGroup.Item>telefonoSec: {cono.telefonoSec}</ListGroup.Item>
          <ListGroup.Item>idEmpresa: {cono.idEmpresa}</ListGroup.Item>
          <ListGroup.Item>estado: {cono.estado}</ListGroup.Item>
          <ListGroup.Item>
            controlfaltaTest: {cono.controlfaltaTest}
          </ListGroup.Item>
          <ListGroup.Item>
            controlfaltaTestSMS: {cono.controlfaltaTestSMS}
          </ListGroup.Item>
          <ListGroup.Item>sm: {cono.sm}</ListGroup.Item>
          <ListGroup.Item>
            confirmacionKeyNueva: {cono.confirmacionKeyNueva}
          </ListGroup.Item>
          <ListGroup.Item>
            comandoPendiente: {cono.comandoPendiente}
          </ListGroup.Item>
          <ListGroup.Item>
            simulaTestPanel: {cono.simulaTestPanel}
          </ListGroup.Item>
          <ListGroup.Item>idMesh: {cono.idMesh}</ListGroup.Item>
          <ListGroup.Item>latitud: {cono.latitud}</ListGroup.Item>
          <ListGroup.Item>longitud: {cono.longitud}</ListGroup.Item>
          <ListGroup.Item>
            geoPosicionManual: {cono.geoPosicionManual}
          </ListGroup.Item>
          <ListGroup.Item>firmware: {cono.firmware}</ListGroup.Item>
          <ListGroup.Item>nextCone: {cono.nextCone}</ListGroup.Item>
          <ListGroup.Item>coneType: {cono.coneType}</ListGroup.Item>
          <ListGroup.Item>
            tensionAlimentacionRadioMesh: {cono.tensionAlimentacionRadioMesh}
          </ListGroup.Item>
          <ListGroup.Item>
            tensionAlimentacionNV5900: {cono.tensionAlimentacionNV5900}
          </ListGroup.Item>
          <ListGroup.Item>firmwareMesh: {cono.firmwareMesh}</ListGroup.Item>
          <ListGroup.Item>estadoMesh: {cono.estadoMesh}</ListGroup.Item>
          <ListGroup.Item>routerCone: {cono.routerCone}</ListGroup.Item>
          <ListGroup.Item>fechaR0: {cono.fechaR0}</ListGroup.Item>
        </ListGroup>
      ))}
    </>
  );
}

export default NoteDetails;
