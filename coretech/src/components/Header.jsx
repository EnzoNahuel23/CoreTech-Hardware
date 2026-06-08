import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header({ cantidad, onVaciar }) {
  const navigate = useNavigate();
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleBuscar = (e) => {
    e.preventDefault();
    if (textoBusqueda.trim() !== '') {
      navigate(`/buscar/${textoBusqueda.trim()}`);
    }
  };

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
              <NavDropdown.Item onClick={() => navigate('/categoria/mother')}>Motherboards</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/categoria/fuente')}>Fuentes</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/categoria/almacenamiento')}>Unidades de Almacenamiento</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/categoria/ram')}>Memorias Ram</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/categoria/placa')}>Placas de Video</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/categoria/consola')}>Consolas</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/categoria/ensamblado')}>Equipos Ensamblados</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Form className="d-flex" onSubmit={handleBuscar}>
            <Form.Control 
              type="search" 
              placeholder="Buscar producto..." 
              className="me-2" 
              value={textoBusqueda}
              onChange={(e) => setTextoBusqueda(e.target.value)}
            />
            <Button variant="outline-success" type="submit">Buscar</Button>
          </Form>

          <Button 
            variant="success" 
            style={{ marginLeft: 20, marginRight: 10 }}
            onClick={() => navigate('/carrito')}
          >
            Carrito <Badge bg="success" text="white" className="ms-1">{cantidad}</Badge>
          </Button>
          
          <Button variant="danger" className="ms-2" onClick={onVaciar}>
            Vaciar Carrito
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;