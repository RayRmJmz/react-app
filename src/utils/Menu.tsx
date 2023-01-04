import { Link, Outlet } from "react-router-dom";

export default function Menu(){

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link  to="/"  className="navbar-brand" >React películas</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/generos" className="nav-link">Géneros</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    
    )
}