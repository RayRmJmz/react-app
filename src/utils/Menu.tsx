import { Link, Outlet } from "react-router-dom";
import ROUTES from '../route-config'
export default function Menu(){

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link  to="/"  className="navbar-brand" >React películas</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={ROUTES.GENEROS} className="nav-link">Géneros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={ROUTES.ACTORES} className="nav-link">Actores</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={ROUTES.CINES} className="nav-link">Cines</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`${ROUTES.PELICULAS}/filtrar_pelicula`} className="nav-link">Filtrar películas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`${ROUTES.PELICULAS}/crear_pelicula`} className="nav-link">Crear película</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    
    )
}