import React from "react";
import "../css/clear.css";

export default function Clear(props) {
  return (
    <div className="boton-clear" onClick={props.manejarClear}>
      {props.children}
    </div>
  );
}
