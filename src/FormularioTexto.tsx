export default function FormularioTexto ( props : formularioTextoProps ){
    return (
      <>
      <h1>From formulario texto</h1>
      <input type="text"
      onKeyUp={(e) => props.manejarKeyUp(e.currentTarget.value)} />
      </>
    )
}

interface formularioTextoProps{
  manejarKeyUp(texto: string): void
}