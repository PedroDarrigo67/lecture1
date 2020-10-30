import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

const SpinnerLoad = () => {
  return (
    <div>
      <Spinner
        style={{ marginLeft: "50%", marginTop: "25%" }}
        animation="grow"
        variant="secondary"
      />
    </div>
  );
};

export default SpinnerLoad;
