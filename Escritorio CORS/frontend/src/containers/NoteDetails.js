import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";


function NoteDetails() {
  const currentCentral = useSelector((state) => {
    return state.centrales;
  });

  return (
    <>
      <Navbar title="DETALLES" />
    </>
  );
}

export default NoteDetails;
