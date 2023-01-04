import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupText( props : formGroupTextProps){
    return (
        <div className="form-floating mb-3">
            <Field name={props.campo} className="form-control"  id={`${props.campo}Label`} placeholder={props.placeholder}/>
            <label htmlFor={`${props.campo}Label`}>{props.label}</label>
            <ErrorMessage name={props.campo}>
                {mensaje => <MostrarErrorCampo mensaje={mensaje}/>}
            </ErrorMessage>
        </div>
    )
}

interface formGroupTextProps {
    campo: string
    label?: string
    placeholder?: string
}