import { ReactElement } from "react"

export default function ProyectarContenido2 ( props : proyectarContenidoProps ){
	return (
		<>
		{props.parteSuperior}
		<hr />
		{props.parteIntermedia}
		<hr />
		{props.parteInferior}
		</>
	)
}

interface proyectarContenidoProps {
	parteSuperior : ReactElement
	parteIntermedia : ReactElement
	parteInferior : ReactElement
}