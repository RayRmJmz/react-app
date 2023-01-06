import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps) {
  const actores: actorPeliculaDTO[] = [
    {
      id: 1,
      nombre: "Ray",
      personaje: "",
      foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elle.com%2Fes%2Fstar-style%2Fel-estilo-de%2Fnews%2Fg728504%2Factores-hollywood-clasico%2F&psig=AOvVaw1_YXyNPai206N9o1Y1nUu8&ust=1673113618068000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiXkInAs_wCFQAAAAAdAAAAABAd",
    },
    {
      id: 2,
      nombre: "Carlos",
      personaje: "",
      foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcadenaser.com%2Fprograma%2F2017%2F12%2F18%2Fla_script%2F1513583990_289680.html&psig=AOvVaw1_YXyNPai206N9o1Y1nUu8&ust=1673113618068000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiXkInAs_wCFQAAAAAdAAAAABAT",
    },
    {
      id: 3,
      nombre: "Alvaro",
      personaje: "",
      foto: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.telemundo.com%2Fentretenimiento%2F2014%2F07%2F29%2Fquien-es-el-actor-mas-bello-de-hollywood-menor-de-35-anos&psig=AOvVaw1_YXyNPai206N9o1Y1nUu8&ust=1673113618068000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiXkInAs_wCFQAAAAAdAAAAABAn",
    },
  ];

  return (
    <>
      <label htmlFor="">Actores</label>
      <Typeahead
        id="typeahead"
        onChange={(actor) => {
          console.log(actor);
        }}
        labelKey="nombre"
        options={actores}
        filterBy={["nombre"]}
        placeholder="Buscar actor"
        minLength={1}
        flip={true}
      />
    </>
  );
}

interface typeAheadActoresProps {
  actores: actorPeliculaDTO[];
}
