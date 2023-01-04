import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './utils/Menu';
import ROUTES from './route-config'
import CrearGenero from './generos/CrearGenero';
import EditarGenero from './generos/EditarGenero';
import CrearActores from './actores/CrearActores';
import EditarActores from './actores/EditarActores';
import IndiceCines from './cines/IndiceCines';
import CrearCines from './cines/CrearCines';
import EditarCines from './cines/EditarCines';
import CrearPelicula from './peliculas/CrearPelicula';
import EditarPelicula from './peliculas/EditarPelicua';
import FiltrarPelicula from './peliculas/FiltroPelicula';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Menu />}>
          <Route index element={<LandingPage />} />

          <Route path={ROUTES.GENEROS} element={<IndiceGeneros />} />
          <Route path={`${ROUTES.GENEROS}/crear_genero`} element={<CrearGenero />} />
          <Route path={`${ROUTES.GENEROS}/editar_genero`} element={<EditarGenero />} />

          <Route path={ROUTES.ACTORES} element={<IndiceGeneros />} />
          <Route path={`${ROUTES.ACTORES}/crear_actores`} element={<CrearActores />} />
          <Route path={`${ROUTES.ACTORES}/editar_actores`} element={<EditarActores />} />

          <Route path={ROUTES.CINES} element={<IndiceCines />} />
          <Route path={`${ROUTES.CINES}/crear_cines`} element={<CrearCines />} />
          <Route path={`${ROUTES.CINES}/editar_cines`} element={<EditarCines />} />

          <Route path={`${ROUTES.PELICULAS}/filtrar_pelicula`} element={<FiltrarPelicula />} />
          <Route path={`${ROUTES.PELICULAS}/editar_pelicula`} element={<EditarPelicula />} />
          <Route path={`${ROUTES.PELICULAS}/crear_pelicula`} element={<CrearPelicula />} />

        </Route>
      </Routes>
    </BrowserRouter>
   

    </>
  );

}

export default App;
