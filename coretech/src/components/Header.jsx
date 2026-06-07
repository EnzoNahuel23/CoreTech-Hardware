import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';

// 1. Cambiamos 'onCatalogo' por 'onNavegar' en los parámetros
function Header({ cantidad, onVaciar, onNavegar }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        {/* Opcional: Hacer que el logo de Coretech también te lleve al inicio */}
        <Navbar.Brand href="#home" onClick={() => onNavegar('inicio')}>
          Coretech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* 2. Evento onClick para ir a Inicio */}
            <Nav.Link 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); onNavegar('inicio'); }}
            >
              Inicio
            </Nav.Link>

            {/* 3. Evento onClick para ir al Catálogo (reemplazando el onCatalogo anterior) */}
            <Nav.Link 
              href="#catalogo" 
              onClick={(e) => { e.preventDefault(); onNavegar('catalogo'); }}
            >
              Catalogo
            </Nav.Link>

            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Motherboards</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fuentes</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Unidades de Almacenamiento</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Memorias Ram</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Perifericos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Placas de Video</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Equipos Ensamblados</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          
          {/* El botón de Carrito se mantiene igual */}
          <Nav.Link href="#action2" style={{marginLeft:20, marginRight:20, color:"white"}}>
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