import { useFormikContext } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupFecha(props: formGroupFechaProps) {
  const { values, validateForm, touched, errors } = useFormikContext<any>();
  return (
    <div className="form-floating mb-3">
      <input
        type="date"
        className="form-control"
        id={props.campo}
        name={props.campo}
        placeholder={props.label}
        defaultValue={values[props.campo]?.toLocaleDateString("en-CA")}
        onChange={(e) => {
          const fecha = new Date(e.currentTarget.value + "T00:00:00");
          values[props.campo] = fecha;
          validateForm();
        }}
      />
      {touched[props.campo] && errors[props.campo] ? (
        <MostrarErrorCampo mensaje={errors[props.campo]?.toString()!} />
      ) : null}
      <label htmlFor={props.campo}>{props.label}</label>
    </div>
  );
}

interface formGroupFechaProps {
  campo: string;
  label: string;
}
