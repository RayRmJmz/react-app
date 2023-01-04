import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./Peliculas.model";
import css from "./ListadoPeliculas.module.css";

export default function ListadoPeliculas( props : listadoPeliculasProps){
    return (
        <div className={css.div}>
            {props.peliculas.map( peliculaMap =>  
                <PeliculaIndividual 
                pelicula={peliculaMap} 
                key={peliculaMap.id}
                />
            )}
        </div>
    )
}

interface listadoPeliculasProps{
    peliculas : pelicula[]
}