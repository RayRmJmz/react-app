import { useNavigate } from "react-router-dom"
import Button from "../utils/Button"
import ROUTES from '../route-config'

export default function CrearGenero(){

    const navigate = useNavigate()

    return (
        <>
        <h3>Crear Género</h3>
        <Button onClick={() => navigate(ROUTES.GENEROS)}>Guardar</Button>
        </>
        
    )
}