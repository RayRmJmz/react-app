import FormularioActores from "./FormularioActores";

export default function EditarActores() {
  return (
    <>
      <div className="container">
        <h3>Editar Actores</h3>
        <FormularioActores
          modelo={{
            nombre: "Christian Bale",
            fechaNacimiento: new Date("1974-01-30T00:00:00"),
            biografia: `# CB
            Ha nacido **Bale**`,
            fotoURL:
              "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/01/gary-oldman.jpg?itok=-wJpqvF8",
          }}
          onSubmit={(valores) => console.log(valores)}
        />
      </div>
    </>
  );
}
