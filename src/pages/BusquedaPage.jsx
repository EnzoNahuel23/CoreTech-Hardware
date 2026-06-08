import { useParams, useNavigate } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Producto from '../components/Producto.jsx';
import { productos } from '../data/productos';
import './BusquedaPageStyle.css';

function BusquedaPage({ carrito = [], stockDisponible = {}, alAgregar }) {
  const { query: terminoBusqueda } = useParams();
  const navigate = useNavigate();

  const productosEncontrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <Container className="busqueda-page-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Resultados de la búsqueda</h2>
          <p className="text-muted">Mostrando resultados para: <strong>"{terminoBusqueda}"</strong></p>
        </div>
        <Button variant="outline-success" onClick={() => navigate('/catalogo')}>
          Ver Todo el Catálogo →
        </Button>
      </div>

      {productosEncontrados.length === 0 ? (
        <div className="text-center my-5 py-5">
          <h4>No se encontraron productos que coincidan con "{terminoBusqueda}".</h4>
        </div>
      ) : (
        <Row className="g-4">
          {productosEncontrados.map((producto) => {
            const itemEnCarrito = carrito.find((productoCarrito) => productoCarrito.id === producto.id);
            const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
            const stockRestante = (stockDisponible[producto.id] ?? producto.stock) - cantidadEnCarrito;

            return (
              <Col xs={12} sm={6} md={3} key={producto.id}>
                <Producto
                  id={producto.id}
                  imagen={producto.imagen}
                  titulo={producto.nombre}
                  precio={producto.precio}
                  stockRestante={stockRestante}
                  alAgregar={() => alAgregar(producto)}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
}

export default BusquedaPage;