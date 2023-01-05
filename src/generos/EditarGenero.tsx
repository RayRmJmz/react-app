import { useParams } from "react-router-dom";
import FormularioGeneros from "./FormularioGeneros";

export default function EditarGenero() {
  const { id }: any = useParams();

  return (
    <>
      <div className="container">
        <h3>Editar Género</h3>
        <h4>El Id de este elemento es {id}</h4>
        <FormularioGeneros
          modelo={{ nombre: "Accion" }}
          onSubmit={async (valores) => {
            await new Promise((r) => setTimeout(r, 1500));
            console.log(valores);
          }}
        />
      </div>
    </>
  );
}
