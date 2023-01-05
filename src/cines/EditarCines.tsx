import FormularioCines from "./FormularioCines";

export default function EditarCines() {
  return (
    <>
      <div className="container">
        <h3>Editar Cines</h3>
        <FormularioCines
          modelo={{
            nombre: "Cinepolis",
            latitud: 19.253083254850825,
            longitud: -103.72028768062592,
          }}
          onSubmit={(valores) => console.log(valores)}
        />
      </div>
    </>
  );
}
