import React, {useContext} from "react"
import Navbar from "react-bootstrap/NavBar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import AuthContext from "../Store/auth-context";


const Header = props => {
  
  const authCtx = useContext(AuthContext)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Elhamayel Blog</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!authCtx.isLoggedIn && <Button size="lg" variant="primary" onClick={props.onShowLogin}>
            Login
          </Button>}
          {authCtx.isLoggedIn && <Button size="lg" variant="primary" onClick={authCtx.onLogout}>
            Logout
          </Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
