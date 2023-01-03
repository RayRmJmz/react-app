import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { textSpanOverlap } from 'typescript';

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

  return (
    <>
      <button onClick={manejarClick}>Click me</button>
      <br />
      <button onClick={() => console.log('click 2')}>Click me 2</button>
      <br />
      <input type="text"
      onKeyUp={(e) => manejarKeyUp(e)} />

      <div>
        {texto}
      </div>

      <div>
            <input type="checkbox" 
            onChange={ (e) => setChecked(e.currentTarget.checked)}
            checked={checked} /> Esto es un checkbox
        </div>
    </>
  );

}

export default App;
