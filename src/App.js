import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import FreeCodeCampLogo from './imagenes/freecodecamp.png';
import {useState} from 'react';
//import React from 'react';

function App() {
  const[numClics,SetnumClics]=useState(0);
  
  const manejarClic = () => {
    SetnumClics(numClics+1);
  }
  
  const reiniciarContador = () => {
    SetnumClics(0);
  }
  return (
    <div className='App'>
     
     <div className='freecodecamp-logo-contenedor'>
     <img
      className='freecodecamp-logo'
      src={FreeCodeCampLogo}
      alt='logo de freecodecamp'/>
       </div>
       <div className='contenedor-principal'>
       <Contador numClics={numClics} />
       <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador} />
       </div>
    </div>
  );
}

export default App;
