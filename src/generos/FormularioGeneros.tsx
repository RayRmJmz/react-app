import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import ROUTES from "../route-config";
import * as Yup from "yup";
import { generoCreacionDto } from "./generos.model";

export default function FormularioGeneros(props: formularioGeneros) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("* Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre" />

          <div className="d-grid gap-2 d-sm-flex">
            <Button disabled={formikProps.isSubmitting} type="submit">
              Guardar
            </Button>
            <Link to={ROUTES.GENEROS} className="btn btn-dark">
              Regresar
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

interface formularioGeneros {
  modelo: generoCreacionDto;
  onSubmit(
    valores: generoCreacionDto,
    accion: FormikHelpers<generoCreacionDto>
  ): void;
}
