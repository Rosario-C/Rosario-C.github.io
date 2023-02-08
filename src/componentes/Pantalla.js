import React from 'react';
import '../calculadoraEstilos/Pantalla.css'

const Pantalla = ({ input }) =>( //definimos un componente como funcion flecha
    <div className='input'>      
        {input}
    </div> 
);
export default Pantalla;