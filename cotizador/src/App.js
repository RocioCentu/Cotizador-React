import React ,{useState}from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import styled from '@emotion/styled';
import Spinner from './components/Spinner';


const Contenedor=styled.div`
max-width:600px;
margin:0 auto;
`;

const ContenedorForm=styled.div`
background-color:#FFFFFF;
padding:3rem;
`; 
function App() {

  const [resumen,guardarResumen]= useState({
    cotizacion: 0,
    datos :{
      marca:'',
      year: '',
      plan: ''

    }
  });
  const [cargando,guardarGargando] =useState(false);
  const {datos}= resumen;
  const {cotizacion}= resumen;

  return (
   <Contenedor>
      <Header 
    titulo="Cotizador de seguros"
    />
  
    <ContenedorForm>
       <Formulario
       guardarResumen={guardarResumen}
       guardarGargando={guardarGargando}
       />
       {cargando ? (
         <Spinner
         />
       ) : null}
       
         <Resumen 
       datos= {datos}
       />
  {!cargando ? ( <Resultado
       cotizacion= {cotizacion}
      
       />): null}
   
    </ContenedorForm>
  </Contenedor>
  );
}

export default App;
