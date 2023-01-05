import { Form, Formik, FormikHelpers } from "formik";
import { cineCreacionDTO } from "./cines.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import ROUTES from "../route-config";
import { Link } from "react-router-dom";
import MapaFormulario from "../utils/MapaFormulario";
import { coordenadasDTO } from "../utils/coordenadas.model";

export default function FormularioCines(props: formularioCinesProps) {
  function transformarCoordenadas(): coordenadasDTO[] | undefined {
    if (props.modelo.latitud && props.modelo.longitud) {
      const respuesta: coordenadasDTO = {
        lat: props.modelo.latitud,
        lng: props.modelo.longitud,
      };
      return [respuesta];
    }
    return undefined;
  }
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre" />
          <div style={{ marginBottom: "1rem" }}>
            <MapaFormulario
              campLat="latitud"
              campoLng="longitud"
              coordenadas={transformarCoordenadas()}
            />
          </div>
          <div className="d-grid gap-2 d-sm-flex">
            <Button disabled={formikProps.isSubmitting} type="submit">
              Guardar
            </Button>
            <Link to={ROUTES.CINES} className="btn btn-dark">
              Regresar
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

interface formularioCinesProps {
  modelo: cineCreacionDTO;
  onSubmit(
    valores: cineCreacionDTO,
    acciones: FormikHelpers<cineCreacionDTO>
  ): void;
}
