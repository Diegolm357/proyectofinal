import { Button, Image, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import vino from '../vino.jpg';
import CardWidget from './CardWidget';

function Navbars() {
  return (
    <>  
   
    <Navbar bg="light" expand="lg">
    <Image classname="logo" src={vino} style={{width:35}} />
    <Navbar.Brand href="#home"></Navbar.Brand>
    <CardWidget/>
    <Navbar.Brand href="#home"></Navbar.Brand>
        <Link to='/'>INICIO</Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="/ItemListBlanco">BLANCOS</Nav.Link>
                 <Nav.Link href="/ItemList">TINTOS</Nav.Link>
      <Nav.Link href="/ItemListEspumante">ESPUMANTES</Nav.Link>
      <NavDropdown title="Contacto" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Vendedores</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Ubicacion</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">About</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Ingrese su busqueda" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</>
  );
}
export default Navbars;
