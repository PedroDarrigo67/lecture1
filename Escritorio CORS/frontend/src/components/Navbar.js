import React from "react";

const Navbar = ({title}) => {
  return (
    <div>
      <h2
        className="title"
        style={{
          color: "black",
          textAlign: "center",
          backgroundColor: "#F6FFD5",
          padding: "0.5em",
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default Navbar;
