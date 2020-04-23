import React,{useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {obtenerDiferenciaYear,calcularMarca,obtenerPlan} from '../Helper';

const Campo=styled.div`
display:flex; margin:2rem; align-items:center;
`;

const Select=styled.select`
display:block; width:100%; padding :1rem ; border :1px solid #e1e1e1; -webkit-appearance: none; 
`;

const Label=styled.label`
flex:0 0 100px;
`;

const Radio=styled.input`
margin:0 1rem;

`;

const Button=styled.button`
background-color:#00838F; font-size:16px;height:50px;width:100%; color:#fff ; text-transform:uppercase; font-weight:bold; border: none;transition:background-color .3s ease;

&:hover{

    background-color:#29C6DA;
    cursor:pointer;
}

`;

const Error=styled.div`
background-color:red; color:white;padding: 1rem ; width:100%; text-align:center;margin-bottom:2rem;

`;
const Formulario = ({guardarResumen,guardarGargando}) => {
   
    const [datos,guardarDatos]= useState({
        marca:'',
        year:'',
        plan:''
      });
      const [error,guardarError]= useState(false);
const {marca ,year,plan}= datos;
// informacion del formulario
const obtenerInfo = e =>{
    guardarDatos({
       ...datos,
       [e.target.name]:e.target.value
      
    });
    console.log(datos);
}
// validar submit
const cotizarSeguro=e=>{
    e.preventDefault();

    if(marca.trim()==='' || year.trim()=== '' || plan.trim()==='' ){
        guardarError(true);
      return;
    }
    guardarError(false);
   // una base de 2000
     let resultado=2000;

    //obtener diferencia de años 
    const diferencia= obtenerDiferenciaYear(year);

    //por cada año hay q restar el 3%
     resultado-=((diferencia*3 )* resultado)/100;


    //Amreicano 15%
    //asiatico 5%
   //europeo 30%

   resultado=calcularMarca(marca) * resultado;
   console.log(resultado);


    //basico aumento a 20%
    //completo 50%
    const incremento=obtenerPlan(plan);
   resultado= parseFloat(incremento * resultado).toFixed(2);

   guardarGargando(true);
   setTimeout(()=>{
    guardarGargando(false);

    guardarResumen({
        cotizacion:Number(resultado),
        datos
    });

   },3000);
   //3000 son 3s
    //total
    

}
  


    return ( 
      <form
      onSubmit={cotizarSeguro}>
       {error ? 
       <Error>Todos lo campos son obligatorios</Error>
       : null}
          <Campo>
              <Label>Marca</Label>
              <Select
             
              name="marca"
              value={marca}
              onChange={obtenerInfo}>
                  <option value="">--- Seleccione ---</option>
                  <option value="americano">Americano</option>
                  <option value="europeo">Europeo</option>
                  <option value="asiatico">Asiatico</option>
              </Select>
          </Campo>
          <Campo>
              <Label>Año</Label>
              <Select
              
               name="year"
               value={year}
               onChange={obtenerInfo}>
                  <option value="">--- Seleccione ---</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2017">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
              </Select>
          </Campo>
          <Campo>
              <Label>Plan</Label>
              <Radio
              onChange={obtenerInfo}
              checked={plan === "basico"}
              type="radio"
              name="plan"
              value="basico"
              /> Basico


              <Radio
              onChange={obtenerInfo}
               checked={plan === "completo"}
              type="radio"
              name="plan"
              value="completo"
              /> Completo
          </Campo>
          <Button type="submit"> Cotizar</Button>
      </form>

     );
}
 
Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired ,
    guardarGargando:PropTypes.func.isRequired
}

export default Formulario;