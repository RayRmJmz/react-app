import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { coordenadasDTO } from "./coordenadas.model";
import { useState } from "react";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props: mapaProps) {
  const [coordenadas, setCoordenadas] = useState<coordenadasDTO[]>(
    props.coordenadas
  );
  return (
    <MapContainer
      center={[19.230827247885475, -103.72226535691192]}
      zoom={14}
      style={{ height: props.height }}
    >
      <TileLayer
        attribution="React pelicualas"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickMapa
        setPunto={(coordenadas) => {
          setCoordenadas([coordenadas]);
          props.manejarClickMapa(coordenadas);
        }}
      />
      {coordenadas.map((coordenada) => (
        <Marcador key={coordenada.lat + coordenada.lng} {...coordenada} />
      ))}
    </MapContainer>
  );
}

function ClickMapa(props: clickMapaProps) {
  useMapEvent("click", (e) => {
    props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
  });
  return null;
}

function Marcador(props: coordenadasDTO) {
  return <Marker position={[props.lat, props.lng]} />;
}

interface clickMapaProps {
  setPunto(coordenadas: coordenadasDTO): void;
}

interface mapaProps {
  height: string;
  coordenadas: coordenadasDTO[];
  manejarClickMapa(coordenadas: coordenadasDTO): void;
}

Mapa.defaultProps = {
  height: "500px",
};
