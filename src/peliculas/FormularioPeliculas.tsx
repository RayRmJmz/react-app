import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./Peliculas.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import ROUTES from "../route-config";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import SelectorMultiple, {
  selectorMultipleModel,
} from "../utils/SelectorMultiple";
import { generoDTO } from "../generos/generos.model";
import { useState } from "react";
import { cineDTO } from "../cines/cines.model";
import TypeAheadActores from "../actores/TypeAheadActores";

export default function FormularioPelicuas(props: formularioPeliculas) {
  const [generosSeleccionados, setGenerosSeleccionados] = useState(
    mapear(props.generosSeleccionados)
  );
  const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(
    mapear(props.generosNoSeleccionados)
  );

  const [cinesSeleccionados, setCinesSeleccionados] = useState(
    mapear(props.cinesSeleccionados)
  );
  const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(
    mapear(props.cinesNoSeleccionados)
  );

  function mapear(
    arreglo: { id: number; nombre: string }[]
  ): selectorMultipleModel[] {
    return arreglo.map((valor) => {
      return { llave: valor.id, valor: valor.nombre };
    });
  }

  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={(valores, acciones) => {
        valores.generosIds = generosSeleccionados.map((valor) => valor.llave);
        valores.cinesIds = cinesSeleccionados.map((valor) => valor.llave);
        props.onSubmit(valores, acciones);
      }}
      validationSchema={Yup.object({
        titulo: Yup.string()
          .required("Este campo es requerido")
          .primeraLetraMayuscula(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText label="Titulo" campo="titulo" />
          <FormGroupCheckbox label="En cines" campo="enCines" />
          <FormGroupText label="Trailer" campo="trailer" />
          <FormGroupFecha campo="fechaLanzamiento" label="Fecha Lanzamiento" />
          <FormGroupImagen
            campo="poster"
            label="Poster"
            imagenURL={props.modelo.posterURL}
          />
          <div className="form-group">
            <label htmlFor="">Géneros</label>
            <SelectorMultiple
              seleccionados={generosSeleccionados}
              noSeleccionados={generosNoSeleccionados}
              onChange={(seleccionados, noSeleccionados) => {
                setGenerosSeleccionados(seleccionados);
                setGenerosNoSeleccionados(noSeleccionados);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Cines</label>
            <SelectorMultiple
              seleccionados={cinesSeleccionados}
              noSeleccionados={cinesNoSeleccionados}
              onChange={(seleccionados, noSeleccionados) => {
                setCinesSeleccionados(seleccionados);
                setCinesNoSeleccionados(noSeleccionados);
              }}
            />
          </div>

          <div className="form-group mb-3">
            <TypeAheadActores actores={[]} />
          </div>
          <div className="d-grid gap-2 d-sm-flex">
            <Button disabled={formikProps.isSubmitting} type="submit">
              Guardar
            </Button>
            <Link to={ROUTES.ROOT} className="btn btn-dark">
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
  generosSeleccionados: generoDTO[];
  generosNoSeleccionados: generoDTO[];
  cinesSeleccionados: cineDTO[];
  cinesNoSeleccionados: cineDTO[];
}
