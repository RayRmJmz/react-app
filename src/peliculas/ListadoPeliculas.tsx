import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./Peliculas.model";
import css from "./ListadoPeliculas.module.css";
import Cargando from "../utils/Cargando";

export default function ListadoPeliculas( props : listadoPeliculasProps){

    if (!props.peliculas){

        return <Cargando />

    } else if (props.peliculas.length === 0){

        return <>No hay elementos para mostrar</>

    }else{

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
    
}

interface listadoPeliculasProps{
    peliculas?: pelicula[]
}