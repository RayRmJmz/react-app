import { generoDTO } from "../generos/generos.model";
import FormularioPelicuas from "./FormularioPeliculas";

export default function CrearPelicula() {
  const generos: generoDTO[] = [
    {
      id: 1,
      nombre: "Accion",
    },
    {
      id: 2,
      nombre: "Drama",
    },
    {
      id: 3,
      nombre: "Terror",
    },
  ];

  return (
    <>
      <div className="container">
        <h3>Crear Película</h3>
        <FormularioPelicuas
          generosSeleccionados={generos}
          generosNoSeleccionados={[]}
          modelo={{ titulo: "", enCines: false, trailer: "" }}
          onSubmit={(valores) => console.log(valores)}
        />
      </div>
    </>
  );
}
