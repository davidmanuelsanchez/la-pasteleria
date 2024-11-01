import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        David Pastelería
      </Link>
      <div className="navbar-categories">
        <Link to="/category/casamiento">Tortas Casamiento</Link>
        <Link to="/category/estacion">Tortas Estación</Link>
        <Link to="/category/frutales">Tartas Frutales</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
