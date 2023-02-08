import React from 'react';
import '../calculadoraEstilos/Botones.css'

//todo lo que esté dentro de la etiqueta se va aconsiderar como children
function Boton(props){
  
    const isOperador = valor => { //va a retornar v o pero va aestar definido por lo siguiente
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
        //si valor NO es nu num, no es un '.' y no es un '=' se va a retirnar verdadero y va a ser un orepardor
    }

    return(
        <button className={`botonContenedor ${isOperador(props.children) ? 'operador' : null}`} 
        onClick={() => props.manejarClick(props.children)}> 
            {props.children} 
        </button>
    );
}
//hago mi eventlistener. lo agrego en la jsx y le paso 'manejarClick' porque es una funcion y hace alusion a agregar input. le paso como pará metro el children porque es el valor de lo que apreti en los botones 
//entonces hago una funcion anónima que se llama cuando hago click, sino no pasa nada porque no sabe el div que tiene que retornar eso que le pido
export default Boton;