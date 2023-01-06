import FormularioPelicuas from "./FormularioPeliculas";

export default function EditarPelicula() {
  return (
    <>
      <div className="container">
        <h3>Editar Película</h3>
        <FormularioPelicuas
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
