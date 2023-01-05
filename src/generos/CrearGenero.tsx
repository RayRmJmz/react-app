import FormularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {
  return (
    <>
      <div className="container">
        <h3>Crear Género</h3>
        <FormularioGeneros
          modelo={{ nombre: "" }}
          onSubmit={async (valores) => {
            await new Promise((r) => setTimeout(r, 1500));
            console.log(valores);
          }}
        />
      </div>
    </>
  );
}
