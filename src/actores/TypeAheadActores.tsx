import { ReactElement } from "react";
import { AsyncTypeahead, Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps) {
  const actores: actorPeliculaDTO[] = [
    {
      id: 1,
      nombre: "Ray",
      personaje: "",
      foto: "https://cdn.pixabay.com/photo/2012/10/26/02/12/actor-63082__340.jpg",
    },
    {
      id: 2,
      nombre: "Carlos",
      personaje: "",
      foto: "https://cdn.pixabay.com/photo/2015/03/15/23/25/james-stewart-675177__340.jpg",
    },
    {
      id: 3,
      nombre: "Alvaro",
      personaje: "",
      foto: "https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070__340.jpg",
    },
  ];

  const seleccion: actorPeliculaDTO[] = [];

  return (
    <>
      <div className="mb-3">
        <label htmlFor="">Actores</label>
        <Typeahead
          id="typeahead"
          onChange={(selected) => {
            if (
              props.actores.findIndex(
                (x) => x.id === (selected[0] as actorPeliculaDTO).id
              ) === -1
            ) {
              props.onAdd([...props.actores, selected[0] as actorPeliculaDTO]);
            }
          }}
          labelKey="nombre"
          options={actores}
          filterBy={["nombre", "personaje"]}
          placeholder="Buscar actor..."
          minLength={1}
          flip={true}
          selected={seleccion}
          renderMenuItemChildren={(option) => {
            return (
              <>
                <img
                  src={(option as actorPeliculaDTO).foto}
                  alt="Img Actor"
                  style={{ height: "64px", marginRight: "10px", width: "64px" }}
                />
                <span>{(option as actorPeliculaDTO).nombre}</span>
              </>
            );
          }}
        />
      </div>
      <ul className="list-group mb-3">
        {props.actores.map((actor) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={actor.id}
          >
            {props.listadoUI(actor)}
            <span
              className="btn btn-dark"
              onClick={() => props.onRemove(actor)}
            >
              Eliminar
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

interface typeAheadActoresProps {
  actores: actorPeliculaDTO[];
  onAdd(actores: actorPeliculaDTO[]): void;
  listadoUI(actor: actorPeliculaDTO): ReactElement;
  onRemove(actor: actorPeliculaDTO): void;
}
