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

  return (
    <>
      <div className="container">
        <h3>Editar Película</h3>
        <FormularioPelicuas
          generosNoSeleccionados={generosNoSeleccionados}
          generosSeleccionados={generosSeleccionados}
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
