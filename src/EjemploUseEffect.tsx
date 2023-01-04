import { useEffect, useState } from "react"

export default function EjemploUseEffect(){

  const [clicks, setClicks] = useState(0)
  const [fecha, setFecha] = useState(new Date())

  useEffect(() => {

    console.log('Use effect clicks')
    document.title = `${clicks} veces`
    
    return () => {
      // se ejecuta al destruir el componente
      console.log('el componente se va a destruir')
    }

  }, [clicks])

  useEffect(() =>{
    
    console.log('Use effect interval')
    
    const intervalId = setInterval(() => {
      setFecha(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  
  })

  useEffect(() => {
    console.log('Use effect de una sola ejecucion')
  }, [])

  return (
    <>
    <button onClick={() => setClicks(clicks + 1 )}>Me has clickeado {clicks} veces</button>
    <div>
      {fecha.toString()}
    </div>
    </>
  )
}
