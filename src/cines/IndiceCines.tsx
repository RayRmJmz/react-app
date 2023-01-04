import { Link } from "react-router-dom";
import ROUTES from '../route-config'

export default function IndiceCines(){
    return (
        <>
        <h3>Indice Cines</h3>
        <Link to={`${ROUTES.CINES}/crear_cines`} className="nav-link">Crear cines</Link>
        </>
        
    )
}