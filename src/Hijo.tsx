import { useContext } from "react"
import ValorContext from "./ValorContext"

export default function Hijo(){

    const valor = useContext( ValorContext )

    return (
        <>
        <h3>Componente hijo: el valor del contexto es: {valor}</h3>
        </>
    )
}