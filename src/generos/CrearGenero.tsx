import { Link, useNavigate } from "react-router-dom"
import Button from "../utils/Button"
import ROUTES from '../route-config'
import { Form, Formik } from "formik"
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText"


export default function CrearGenero(){

    return (
        <>
        <div className="container">
            <h3>Crear Género</h3>

            <Formik 
            initialValues={{nombre : ''}}
            onSubmit={values => console.log(values)}

            validationSchema={Yup.object({
                nombre : Yup.string().required('* Este campo es requerido')
            })}
            >
                <Form>

                    <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre"/>

                    <div className="d-grid gap-2 d-sm-flex">
                        <Button type="submit">Guardar</Button>
                        <Link to={ROUTES.GENEROS} className="btn btn-dark">Regresar</Link>
                    </div>
                    
                </Form>
                
            </Formik>
        </div>
        </>
        
    )
}