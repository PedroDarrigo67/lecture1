import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NoteDetails() {
  return (
    <>
      <h2
        className="title"
        style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "#6c757d",
          padding: "0.5em",
          textDecoration: "none",
        }}
      >
        <Link to="/">
          <Button variant="light" style={{ marginRight: "100%" }}>
            Volver
          </Button>
        </Link>
        Detalles
      </h2>
    </>
  );
}

export default NoteDetails;
