import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NoteDetails() {
  return (
    <>
      <Navbar title="Detalles">
        <Link to="/">
          <Button variant="light" style={{ marginRight: "100%" }}>
            Volver
          </Button>
        </Link>
      </Navbar>
    </>
  );
}

export default NoteDetails;
