export default function MostrarTexto( props : mostrarTextoProps){
    return(
			<div>
        {props.texto}
      </div>
    )
}

interface mostrarTextoProps{
	texto : string
}

//asignar un valor por defecto en lugar de usar operador ternario como en ProyectarContenido2.tsx
MostrarTexto.defaultProps = {
  texto: 'Valor por defecto con .defaultProps'
}