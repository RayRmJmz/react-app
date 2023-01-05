import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { generoDTO } from "../generos/generos.model";
import Button from "../utils/Button";
import ROUTES from "../route-config";

export default function FiltrarPelicula() {
  const valorInicial: filtrarPeliculaForm = {
    titulo: "",
    generoId: 0,
    proximosExtrenos: false,
    enCines: false,
  };

  const generos: generoDTO[] = [
    { id: 1, nombre: "Acción" },
    { id: 2, nombre: "Drama" },
    { id: 3, nombre: "Terror" },
  ];
  return (
    <>
      <div className="container">
        <h3>Filtrar Pelicula</h3>
        <Formik
          initialValues={valorInicial}
          onSubmit={(valores) => console.log(valores)}
        >
          {(formikProps) => (
            <Form>
              <div className="row mb-3">
                <div className="form-floating col">
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    placeholder="Títilo película"
                    {...formikProps.getFieldProps("titulo")}
                  />
                  <label htmlFor="titulo">Título</label>
                </div>
                <div className="col form-floating">
                  <select
                    className="form-control"
                    {...formikProps.getFieldProps("generoId")}
                    id="generoSelect"
                  >
                    <option value="0">--Seleccionar</option>
                    {generos.map((genero) => (
                      <option key={genero.id} value={genero.id}>
                        {genero.nombre}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="generoSelect">Géneros</label>
                </div>
                <div className="col">
                  <div className="form-check form-switch">
                    <Field
                      type="checkbox"
                      role="switch"
                      className="form-check-input"
                      id="enCines"
                      name="enCines"
                    />
                    <label className="form-check-label" htmlFor="enCines">
                      En cines
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <Field
                      type="checkbox"
                      role="switch"
                      className="form-check-input"
                      id="proximosExtrenos"
                      name="proximosExtrenos"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="proximosExtrenos"
                    >
                      Próximos estrenos
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 d-sm-flex">
                <Button
                  className="btn btn-primary"
                  onClick={() => formikProps.submitForm()}
                >
                  Filtrar
                </Button>
                <Button
                  className="btn btn-dark"
                  onClick={() => formikProps.setValues(valorInicial)}
                >
                  Limpiar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

interface filtrarPeliculaForm {
  titulo: string;
  generoId: number;
  proximosExtrenos: boolean;
  enCines: boolean;
}
