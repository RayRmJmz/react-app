import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPelicuas from "./FormularioPeliculas";

export default function EditarPelicula() {
  const generosNoSeleccionados: generoDTO[] = [
    {
      id: 2,
      nombre: "Drama",
    },
  ];

  const generosSeleccionados: generoDTO[] = [
    {
      id: 1,
      nombre: "Accion",
    },
    {
      id: 3,
      nombre: "Terror",
    },
  ];

  const cineSeleccionados: cineDTO[] = [
    {
      id: 1,
      nombre: "Cinepolis",
    },
    {
      id: 2,
      nombre: "Cinemex",
    },
  ];

  const cineNoSeleccionados: cineDTO[] = [];
  return (
    <>
      <div className="container">
        <h3>Editar Película</h3>
        <FormularioPelicuas
          generosNoSeleccionados={generosNoSeleccionados}
          generosSeleccionados={generosSeleccionados}
          cinesSeleccionados={cineSeleccionados}
          cinesNoSeleccionados={cineNoSeleccionados}
          modelo={{
            titulo: "Avatar",
            enCines: true,
            trailer: "url",
            fechaLanzamiento: new Date("2022-01-01T00:00:00"),
          }}
          onSubmit={(valores) => console.log(valores)}
        />
      </div>
    </>
  );
}
