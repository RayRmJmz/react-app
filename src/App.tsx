import './App.css'
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import { pelicula } from './peliculas/Peliculas.model';


function App() {

  const peliculaPrueba : pelicula = {
    id : 1,
    titulo : 'Lord of the rings : the fellowship of ring',
    poster : 'https://imgs.search.brave.com/5cNzZj74YgWaRXQcDpNTRzLSaYBUtz6Nd3ct76hIm6I/rs:fit:312:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/MnhQRlgwcDU1UzRP/eWRob3B0MXR3SGFM/USZwaWQ9QXBp'

  }

  return (
    <>
    <PeliculaIndividual pelicula={peliculaPrueba}/>
    </>
  );

}

export default App;
