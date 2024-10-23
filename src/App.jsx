import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a David Pastelería!" />
    </Router>
  );
};

export default App;
