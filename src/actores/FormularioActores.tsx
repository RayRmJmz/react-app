import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./actores.model";
import ROUTES from "../route-config";
import * as Yup from "yup";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";

export default function FormularioActores(props: formularioActoresProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
        fechaNacimiento: Yup.date()
          .nullable()
          .required("Este campo es requerido"),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre" />
          <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />
          <FormGroupImagen
            campo="foto"
            label="Foto"
            imagenURL={props.modelo.fotoURL}
          />
          <div className="d-grid gap-2 d-sm-flex">
            <Button disabled={formikProps.isSubmitting} type="submit">
              Guardar
            </Button>
            <Link to={ROUTES.ACTORES} className="btn btn-dark">
              Regresar
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

interface formularioActoresProps {
  modelo: actorCreacionDTO;
  onSubmit(
    valores: actorCreacionDTO,
    acciones: FormikHelpers<actorCreacionDTO>
  ): void;
}
