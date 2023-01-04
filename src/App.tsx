import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';
import './App.css';
import MostrarTexto from './MostrarTexto';
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import EjemploReloj from './EjemploReloj';
import ContenidoDinamico from './ContenidoDinamico';

function App() {

  //let texto = ''
  const [texto, setTexto] = useState('')

  const [checked, setChecked] = useState(true)

  const manejarClick = () => console.log('click')

  const manejarKeyUp = ( e : React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    //texto = e.currentTarget.value
    setTexto(e.currentTarget.value)
  }

  const parteIntermediaConst = <EjemploReloj />

  const estilo = {
    backgroundColor : 'red',
    width : '50px',
    height : '50px',
    marginLeft : '1rem'
  }

  const calificaciones = [
    {nombre : 'Felipe', calificacion: 75},
    {nombre : 'Claudia', calificacion: 85},
    {nombre : 'Roberto', calificacion: 95},
  ]

  const parteInferiorConst = <div style={estilo}></div>
  return (
    <>
      <button onClick={manejarClick}>Click me</button>
      <br />
      <button onClick={() => console.log('click 2')}>Click me 2</button>
      <br />
      <ContenidoDinamico calificacion = {95} />
      <ContenidoDinamico calificacion = {65} />

      {calificaciones.map(cal => <ContenidoDinamico key = {cal.nombre} {...cal} />)}
      <ProyectarContenido>
        <>
        <h6>Dentro del contenido</h6>
        <span>Proyectando contenido</span>
        </>
      </ProyectarContenido>

      <ProyectarContenido2 
      //parteSuperior = {<h3>Esta es la parte superios de contenido 2 </h3> }
      parteIntermedia = {parteIntermediaConst}
      parteInferior = {parteInferiorConst}
      />

      <input type="text"
      onKeyUp={(e) => manejarKeyUp(e)} />

      <MostrarTexto texto = {texto} />

      <MostrarTexto />
      <div>
            <input type="checkbox" 
            onChange={ (e) => setChecked(e.currentTarget.checked)}
            checked={checked} /> Esto es un checkbox
        </div>
    </>
  );

}

export default App;
