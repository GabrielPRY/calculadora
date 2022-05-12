import { useState } from "react";
import "./App.css";
import Boton from "./componentes/Boton";
import Clear from "./componentes/Clear";
import Pantalla from "./componentes/Pantalla";

import { evaluate, i } from "mathjs";
import Logo from "./componentes/Logo";

function App() {
  ///hook para input
  const [input, setInput] = useState("");

  //asigna el valor al input
  const agregarInput = (value) => {
    setInput(input + value);
  };

  ///funcion del =
  const calcularResultado = () => {
    if (input.includes(".")) {
      try {
        setInput(evaluate(input).toFixed(2));
      } catch (error) {
        alert("Expresion invalida");
      }
    } else if (input === "") {
      alert("Ingrese Valores");
    } else {
      try {
        if (Number.isInteger(evaluate(input))) {
          console.log("Resultado entero");
          setInput(evaluate(input));
        } else {
          console.log("resultado no entero");
          setInput(evaluate(input).toFixed(2));
        }
      } catch (error) {
        alert("Expresion invalida");
      }
    }
  };

  return (
    <div className="App">
      <Logo></Logo>
      <div className="contenedor-principal">
        <Pantalla input={input}></Pantalla>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Clear manejarClear={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;

///// crear un component para el logo xDDDDDDDD
//// detectar casos no manejados en la app papi
/// 05:26:44
