import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { productos } from '../data/productos';
import { formatearPrecio } from '../utils/formatearPrecio.js';
import './ProductoPageStyle.css';

function ProductoPage({ carrito = [], stockDisponible = {}, onAgregarProducto }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return (
      <Container className="text-center mt-5">
        <h2>Producto no encontrado</h2>
        <Button variant="success" onClick={() => navigate('/catalogo')} className="mt-3">
          Volver al catálogo
        </Button>
      </Container>
    );
  }

  const productoEnCarrito = carrito.find((item) => item.id === producto.id);
  const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;
  const stockActual = stockDisponible[producto.id] ?? producto.stock;
  const stockRestante = stockActual - cantidadEnCarrito;
  const sinStock = stockRestante <= 0;

  const handleComprar = () => {
    if (sinStock) {
      alert("⚠️ Lo sentimos, no se pueden agregar más unidades.");
    } else {
      onAgregarProducto(producto);
    }
  };

  return (
    <Container className="producto-page-container">
      <Button variant="outline-success" onClick={() => navigate('/catalogo')} className="mb-4">
        ← Volver al Catálogo
      </Button>

      <Row className="align-items-center">
        <Col md={6} className="text-center d-flex justify-content-center align-items-center">
          <img 
            src={producto.imagen} 
            alt={producto.nombre} 
            className="img-fluid producto-page-img" 
          />
        </Col>
        
        <Col md={6}>
          <span className="text-muted text-uppercase small">{producto.categoria}</span>
          <h1 className="fw-bold mt-2">{producto.nombre}</h1>
          <h2 className="text-success my-3">{formatearPrecio(producto.precio)}</h2>
          <p className="lead">{producto.descripcion || "Sin descripción disponible."}</p>
          <hr />
          
          <div className="my-4">
            <h5><strong>Disponibilidad:</strong></h5>
            <p className="mb-1">Stock de la tienda: <span className="fw-bold">{stockActual} unidades</span>.</p>
            <small className="text-muted d-block">(Llevás {cantidadEnCarrito}. Te quedan {stockRestante})</small>
          </div>

          <Button 
            variant={sinStock ? "secondary" : "success"} 
            size="lg" 
            className={`w-100 producto-page-btn ${sinStock ? 'sin-stock' : ''}`}
            onClick={handleComprar}
          >
            {sinStock ? "Sin Stock Disponible" : "Agregar al carrito"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductoPage;