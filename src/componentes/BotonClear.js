import React from 'react';
import '../calculadoraEstilos/BotonClear.css'

const ClearBoton = (props) =>(
    <button className='clearBoton' onClick={() => props.manejarClear(props.children)}>
        {props.children}
    </button>
);
export default ClearBoton;