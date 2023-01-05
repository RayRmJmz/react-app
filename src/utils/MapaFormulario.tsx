import { useFormikContext } from "formik";
import { coordenadasDTO } from "./coordenadas.model";
import Mapa from "./Mapa";

export default function MapaFormulario(props: mapaFormularioPros) {
  const { values } = useFormikContext<any>();

  function actualizarCampos(coordenadas: coordenadasDTO) {
    values[props.campLat] = coordenadas.lat;
    values[props.campoLng] = coordenadas.lng;
  }

  return (
    <Mapa coordenadas={props.coordenadas} manejarClickMapa={actualizarCampos} />
  );
}

interface mapaFormularioPros {
  coordenadas: coordenadasDTO[];
  campLat: string;
  campoLng: string;
}

MapaFormulario.defaultProps = {
  coordenadas: [],
};
