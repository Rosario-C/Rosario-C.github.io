import './App.css';
import FreeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png' 
import Boton from './componentes/Botones';
import Pantalla from './componentes/Pantalla';
import ClearBoton from './componentes/BotonClear';
import React, { useState } from 'react';
import { evaluate } from 'mathjs'; //es una librearia de matematicas para react y node js

function App() {

    const [input, setInput] = useState('');

    const agregarInput = valor =>{
      setInput(input + valor);
    };
    const calcularResultado = () =>{
      if(input){ //puedo ponerlo solo porque es un valo thrulu, es decir que si la cadena de caracteres tiene valor, es true, pero si está vacia es falsa
        setInput(evaluate(input));
      }else{
        alert("Por favor ingrese un valor para realizar cálculos");
      }
    };

  return (
    <div className='App'>
      <div className='freeCodeCampLogo_contenedor'>
        <img
          src={FreeCodeCampLogo}
          className='freeCodeCampLogo'
          alt='Logo freeCodeCamp'
        />
      </div>
      <div className='contenedorCalculadora'>
        <Pantalla input={input}/>
          <div className='fila'>
            <Boton  manejarClick={agregarInput}>1</Boton> 
            <Boton  manejarClick={agregarInput}>2</Boton>
            <Boton  manejarClick={agregarInput}>3</Boton>
            <Boton  manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton  manejarClick={agregarInput}>4</Boton>
            <Boton  manejarClick={agregarInput}>5</Boton>
            <Boton  manejarClick={agregarInput}>6</Boton>
            <Boton  manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton  manejarClick={agregarInput}>7</Boton>
            <Boton  manejarClick={agregarInput}>8</Boton>
            <Boton  manejarClick={agregarInput}>9</Boton>
            <Boton  manejarClick={agregarInput}>*</Boton>

          </div>
          <div className='fila'>
            <Boton  manejarClick={calcularResultado}>=</Boton>
            <Boton  manejarClick={agregarInput}>0</Boton>
            <Boton  manejarClick={agregarInput}>.</Boton>
            <Boton  manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <ClearBoton manejarClear={() => setInput('')}>
              Clear
            </ClearBoton>
          </div>
      </div>
    </div>
  );
}

export default App;
