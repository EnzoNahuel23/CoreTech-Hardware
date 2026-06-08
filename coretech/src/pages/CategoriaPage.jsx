import { useParams, useNavigate } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Producto from '../components/Producto.jsx';
import { productos } from '../data/productos';

function CategoriaPage({ carrito = [], onAgregar }) {
  const { cat } = useParams();
  const navigate = useNavigate();

  const productosFiltrados = productos.filter(
    (p) => p.categoria.toLowerCase() === cat.toLowerCase()
  );

  return (
    <Container style={{ marginTop: 40, marginBottom: 50 }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-uppercase">Sección: {cat}</h2>
        <Button variant="outline-success" onClick={() => navigate('/catalogo')}>
          Ver Todo el Catálogo →
        </Button>
      </div>

      {productosFiltrados.length === 0 ? (
        <div className="text-center my-5 py-5">
          <h4>No se encontraron artículos en la categoría "{cat}".</h4>
        </div>
      ) : (
        <Row className="g-4">
          {productosFiltrados.map((p) => {
            const itemEnCarrito = carrito.find((item) => item.id === p.id);
            const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
            const stockRestante = p.stock - cantidadEnCarrito;

            return (
              <Col md={3} key={p.id}>
                <Producto
                  id={p.id}
                  imagen={p.imagen}
                  titulo={p.nombre}
                  precio={p.precio}
                  stockRestante={stockRestante}
                  onAgregar={() => onAgregar(p)}
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