import FormularioCines from "./FormularioCines";

export default function EditarCines() {
  return (
    <>
      <div className="container">
        <h3>Editar Cines</h3>
        <FormularioCines
          modelo={{ nombre: "Cinepolis" }}
          onSubmit={(valores) => console.log(valores)}
        />
      </div>
    </>
  );
}
