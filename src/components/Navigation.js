import React from "react";
import { Link } from "react-router-dom";

const TitleStyle = {
  textAlign: "center"
};

const divAlign = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};

const LinkStyle = {
  margin: "15px",
  color: "purple",
};

const Navigation = () => {
  return (
    <div>
      <h1 style={TitleStyle}>React Router Mini</h1>
      <div style={divAlign} className="App">
        <div>
          <Link style={LinkStyle} to="/">
            Home
          </Link>
        </div>
        <div>
          <Link style={LinkStyle} to="/about">
            About
          </Link>
        </div>
        <div>
          <Link style={LinkStyle} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
