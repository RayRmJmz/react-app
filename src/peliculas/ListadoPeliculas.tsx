import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./Peliculas.model";
import css from "./ListadoPeliculas.module.css";
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPeliculas( props : listadoPeliculasProps){

    return (
        <ListadoGenerico 
        cargandoUI={<>Cargando...</>}
        listado={props.peliculas}>

            <div className={css.div}>
                {props.peliculas?.map(peliculaMap =>
                    <PeliculaIndividual pelicula={peliculaMap}
                    key={peliculaMap.id}
                    />)}
            </div>
        </ListadoGenerico>
        
    )
}

interface listadoPeliculasProps{
    peliculas?: pelicula[]
}