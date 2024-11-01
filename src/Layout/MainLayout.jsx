// Importa React
import PropTypes from "prop-types"; // Importa PropTypes
import NavBar from "../components/Navbar"; // Importa el componente NavBar

// Componente MainLayout que recibe 'children' como prop
const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar /> {/* Renderiza el componente NavBar */}
      <main>{children}</main>{" "}
      {/* Renderiza el contenido principal (children) */}
    </div>
  );
};

// Validación de propiedades
MainLayout.propTypes = {
  children: PropTypes.node.isRequired, // Valida que 'children' sea un nodo React y es requerido
};

export default MainLayout; // Exporta el componente MainLayout
