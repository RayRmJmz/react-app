export default function ContenidoDinamico ( props : any ){
  // ejemplo 1 con operador ternario
  // return (
  //   <div>
  //     { props.mostrarMensajeSecreto ? <span>Mensaje secreto 42</span> : null }
  //   </div>
  // )

  // ejemplo 2 con if
  if (props.calificacion > 90){
    return (
      <div>
        <h3>Exelente calificación</h3>
      </div>
    )
  } else if (props.calificacion >= 80 && props.calificacion <= 90){
    return (
      <div>
        <h3>Muy bien hecho</h3>
      </div>
    )
  } else{
    return (
      <div>
        <h3>lol...</h3>
      </div>
    )
  }
}