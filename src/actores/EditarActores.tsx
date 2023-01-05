import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  return (
    <>
      <div className="container">
        <h3>Editar Actores</h3>
        <FormularioActores
          modelo={{
            nombre: "Christian Bale",
            fechaNacimiento: new Date("1974-01-30T00:00:00"),
          }}
          onSubmit={(valores) => console.log(valores)}
        />
      </div>
    </>
  );
}
