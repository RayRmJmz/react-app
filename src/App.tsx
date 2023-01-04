import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import configurarValidaciones from './Validaciones';

configurarValidaciones()

function App() {

  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.ROOT} element={<Menu />}>
          <Route index element={<LandingPage />} />

          <Route path={ROUTES.GENEROS} element={<IndiceGeneros />} />
          <Route path={`${ROUTES.GENEROS}/crear`} element={<CrearGenero />} />
          <Route path={`${ROUTES.GENEROS}/editar/:id`} element={<EditarGenero />} />

          <Route path={ROUTES.ACTORES} element={<IndiceGeneros />} />
          <Route path={`${ROUTES.ACTORES}/crear`} element={<CrearActores />} />
          <Route path={`${ROUTES.ACTORES}/editar/:id`} element={<EditarActores />} />

          <Route path={ROUTES.CINES} element={<IndiceCines />} />
          <Route path={`${ROUTES.CINES}/crear`} element={<CrearCines />} />
          <Route path={`${ROUTES.CINES}/editar/:id`} element={<EditarCines />} />

          <Route path={`${ROUTES.PELICULAS}/crear`} element={<CrearPelicula />} />
          <Route path={`${ROUTES.PELICULAS}/editar/:id`} element={<EditarPelicula />} />
          <Route path={`${ROUTES.PELICULAS}/filtrar_pelicula`} element={<FiltrarPelicula />} />

          <Route path="*" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>
    </BrowserRouter>
    
   

    </>
  );

}

export default App;
