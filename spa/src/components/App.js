// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Products from "./Products";

function App() {
  return (
    /*En la V6, ya no se puede usar el prop "component". Este fue reemplazado por "element", 
    con la siguiente sintaxis: <Route path="/" element={<Home />}></Route>
      Además, <Route> solo puede ser usado como hijo de <Routes>, ya no más directamente.
      Por lo que hay que importar también Routes. Y usarlo para envolver todos los <Route>*/
    <div>
      <Link to="/about" exact="true">
        About
      </Link>
      <br></br>
      <Link to="/contact" exact="true">
        Contact
      </Link>
      <br></br>
      <Link to="/" exact="true">
        Home
      </Link>
      <br></br>
      <Link to="/no-existe" exact="true">
        No existe
        {/* No muestra nada, porque la ruta no tiene ningún macheo con ningún path */}
      </Link>
      <br></br>
      <Link to="/products/1" exact="true">
        Products
      </Link>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} exact="true"></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products/:id" element={<Products />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
