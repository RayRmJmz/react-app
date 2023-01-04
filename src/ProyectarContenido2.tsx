import { ReactElement } from "react"

export default function ProyectarContenido2 ( props : proyectarContenidoProps ){
	return (
		<>
		Componente 2 parte superior : {props.parteSuperior ? props.parteSuperior : <h3>Contenido por defecto</h3>}
		<hr />
		Componente 2 parte intermedia :{props.parteIntermedia}
		<hr />
		Componente 2 parte inferior :{props.parteInferior}
		</>
	)
}

interface proyectarContenidoProps {
	parteSuperior? : ReactElement					//El signo de ? vuelve opcional una propiedad
	parteIntermedia : ReactElement
	parteInferior : ReactElement
}