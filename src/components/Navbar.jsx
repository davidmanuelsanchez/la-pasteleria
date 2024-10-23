import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          David Pastelería
        </Typography>
        <Button color="inherit" component={Link} to="#casamientos">
          Tortas Casamientos
        </Button>
        <Button color="inherit" component={Link} to="#estacion">
          Tortas Estación
        </Button>
        <Button color="inherit" component={Link} to="#frutales">
          Tartas Frutales
        </Button>
        <CartWidget />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
