import { Link, useNavigate } from "react-router-dom"
import Button from "../utils/Button"
import ROUTES from '../route-config'
import { Field, Form, Formik } from "formik"


export default function CrearGenero(){

    const navigate = useNavigate()

    return (
        <>
        <h3>Crear Género</h3>

        <Formik 
        initialValues={{nombre : ''}}
        onSubmit={values => console.log(values)}
        >
            <Form>

                <div className="form-floating mb-3">
                    <Field name='nombre' className="form-control"  id="nombreLabel" placeholder="Nombre"/>
                    <label htmlFor="nombreLabel">Nombre</label>
                </div>

                <div className="d-grid gap-2 d-sm-flex">
                    <Button type="submit">Guardar</Button>
                    <Link to={ROUTES.GENEROS} className="btn btn-dark">Regresar</Link>
                </div>
                
            </Form>
            
        </Formik>

        </>
        
    )
}