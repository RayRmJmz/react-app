import FormularioPelicuas from "./FormularioPeliculas";

export default function CrearPelicula() {
  return (
    <>
      <div className="container">
        <h3>Crear Película</h3>
        <FormularioPelicuas
          modelo={{ titulo: "", enCines: false, trailer: "" }}
          onSubmit={(valores) => console.log(valores)}
        />
      </div>
    </>
  );
}
