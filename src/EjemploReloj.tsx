import { useState, useEffect } from "react"

export default function EjemploReloj(){
    const [fecha, setFecha] = useState(new Date())
  
  useEffect(() => {
    const timerId = setInterval(() =>{
      setFecha(new Date())
    },1000)

    return () => clearInterval(timerId)
  })

  return(
    <div className="App">
      <h3>Ejemplo</h3>
      <input type="text" />
      <div>{fecha.toString()}</div>
    </div>
  )
}