import { Link } from "react-router-dom";
import ROUTES from "../route-config";

export default function IndiceActores() {
  return (
    <>
      <h3>Indice Actores</h3>
      <Link to={`${ROUTES.ACTORES}/crear`} className="nav-link">
        Crear actor
      </Link>
    </>
  );
}
