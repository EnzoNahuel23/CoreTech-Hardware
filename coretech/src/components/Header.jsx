import { useNavigate } from 'react-router-dom'; // ← Importamos el navegador
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Header({ cantidad, onVaciar }) {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          CoreTech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            

            <Nav.Link onClick={() => navigate('/')}>Inicio</Nav.Link>
            
            <Nav.Link onClick={() => navigate('/catalogo')}>Catálogo</Nav.Link>

            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Motherboards</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fuentes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Unidades de Almacenamiento</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Memorias Ram</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Placas de Video</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Equipos Ensamblados</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Buscar</Button>
          </Form>

          <Nav.Link href="#action2" style={{ marginLeft: 20, marginRight: 20, color: "white" }}>
            Carrito <Badge bg="success">{cantidad}</Badge>
          </Nav.Link>
          <Button variant="danger" className="ms-2" onClick={onVaciar}>
            Vaciar Carrito
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;