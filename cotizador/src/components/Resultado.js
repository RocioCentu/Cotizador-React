import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import {TransitionGroup , CSSTransition} from 'react-transition-group';



const Mensaje=styled.p`
padding:1rem; text-align:center; background-color: rgb(127,224,237);color:#FFF; margin-top:2rem; 
`;
const ResultadoContenedor=styled.div`
padding:1rem; text-align:center; border: 1px solid #26C6DA; background-color: rgb(127,224,237);margin-top:2rem;  position : relative;
`;
const Total=styled.p`
padding:1rem; text-transform:uppercase; font-weight:bold;color:#00838F; margin:0; 
`;
 
const Resultado = ({cotizacion}) => {
    return(
    cotizacion === 0 ?  
    (<Mensaje>Elige marca,año y tipo de seguro</Mensaje>)
    : 
     ( <ResultadoContenedor>
         <TransitionGroup
         component="span"
         className="resultado"
         >
             <CSSTransition
             classNames="resultado"
             key={cotizacion}
             timeout={{enter: 500,exit:500}}
             >
               <Total>Total: <span>${cotizacion}</span></Total>
             </CSSTransition>
         </TransitionGroup>
    
     </ResultadoContenedor>
     )
     )
}
 Resultado.propTypes={
     cotizacion: PropTypes.number.isRequired
 }
export default Resultado;