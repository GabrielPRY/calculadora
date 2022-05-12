import React from "react";
import logo from "../imagenes/logo.png";
import "../css/logo.css";

export default function Logo() {
  return (
    <div className="contenedor-logo">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
