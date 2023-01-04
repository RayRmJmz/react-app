import { Link } from "react-router-dom";
import ROUTES from '../route-config'

export default function IndiceGeneros(){

    return (
        <>
        <h3>Indice Géneros</h3>
        <Link to={`${ROUTES.GENEROS}/crear`} className="nav-link">Crear genero</Link>
        </>
        
    )
}