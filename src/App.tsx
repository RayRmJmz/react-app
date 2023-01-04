import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './utils/Menu';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />}>
        <Route index element={<LandingPage />} />
        <Route path="generos" element={<IndiceGeneros />} />
        </Route>
      </Routes>
    </BrowserRouter>
   

    </>
  );

}

export default App;
