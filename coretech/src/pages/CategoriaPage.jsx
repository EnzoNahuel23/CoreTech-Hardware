import { useParams, useNavigate } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Producto from '../components/Producto.jsx';
import { productos } from '../data/productos';
import './CategoriaPageStyle.css';

function CategoriaPage({ carrito = [], stockDisponible = {}, alAgregar }) {
  const { cat: nombreCategoria } = useParams();
  const navigate = useNavigate();

  const productosFiltrados = productos.filter(
    (producto) => producto.categoria.toLowerCase() === nombreCategoria.toLowerCase()
  );

  return (
    <Container className="categoria-page-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-uppercase">Sección: {nombreCategoria}</h2>
        <Button variant="outline-success" onClick={() => navigate('/catalogo')}>
          Ver Todo el Catálogo →
        </Button>
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="text-center my-5 py-5">
          <h4>No se encontraron artículos en la categoría "{nombreCategoria}".</h4>
        </div>
      ) : (
        <Row className="g-4">
          {productosFiltrados.map((producto) => {
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

export default CategoriaPage;