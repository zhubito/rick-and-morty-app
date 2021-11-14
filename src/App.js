import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Componentes Propios
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx";
import Buscador from "./components/Buscador.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Detalle from "./components/Detalle.jsx";

function App() {
  return (
    <Router>
      <div className="backgroundBody">
        <h1 className="colorHoum center p-3 fst-italic">¡Bienvenidos HOUM!</h1>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/buscador" element={<Buscador/>} />
            <Route exact path="/buscador/:id" element={<Detalle />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
      </div>
    </Router>   
  );
}


export default App;
