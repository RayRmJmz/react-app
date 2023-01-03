import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const subtitlo = "Esto es un subtitulo";

  const duplicar = (valor : number) => valor * 2 ;

  const imgURL = "https://cdn.pixabay.com/photo/2022/12/26/19/57/champagne-7679665_960_720.jpg"
  return (
    <>
      <h1>Hola mundo!</h1>
      <h3>{subtitlo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <div>
        <input type="checkbox" checked={true} /> Esto es un checkbox
      </div>
      <img src={imgURL} alt="img muestra" />
    </>
  );
}

export default App;
