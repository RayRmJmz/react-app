import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./Peliculas.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import ROUTES from "../route-config";

export default function FormularioPelicuas(props: formularioPeliculas) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        titulo: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText label="Titulo" campo="tiutlo" />
          <div className="d-grid gap-2 d-sm-flex">
            <Button disabled={formikProps.isSubmitting} type="submit">
              Guardar
            </Button>
            <Link to={ROUTES.PELICULAS} className="btn btn-dark">
              Regresar
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

interface formularioPeliculas {
  modelo: peliculaCreacionDTO;
  onSubmit(
    valores: peliculaCreacionDTO,
    acciones: FormikHelpers<peliculaCreacionDTO>
  ): void;
}
