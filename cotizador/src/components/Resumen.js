import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {mayusculas} from '../Helper';


const Contenedor=styled.div`
padding:1rem; text-align:center; background-color: #00838F;color:#FFF; margin-top:1rem; 
`;

 
const Resumen = ({datos}) => {
    const {marca, year, plan}= datos;
    if(marca ==='' || year === '' || plan === '') return null;
    return ( 
        <Contenedor>
       <h2>Resumen te cotizacion</h2>
       <ul>
           <li>Marca : {mayusculas(marca)}</li>
           <li>Año : {mayusculas(year)}</li>
           <li>Plan: {mayusculas(plan)}</li>

       </ul>
       </Contenedor>
     );
}
 Resumen.prototypes = {
     datos : PropTypes.object.isRequired
 }
export default Resumen;