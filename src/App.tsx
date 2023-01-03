import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [fecha, setFecha] = useState(new Date())
  
  useEffect(() => {
    const timerId = setInterval(() =>{
      setFecha(new Date())
    },1000)

    return () => clearInterval(timerId)
  })

  return (
    <div className="App">
      <div className="App">
      <h3>Ejemplo</h3>
      <input type="text" />
      <div>{fecha.toString()}</div>
    </div>
    </div>
  );
}

export default App;
