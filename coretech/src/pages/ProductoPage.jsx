import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { productos } from '../data/productos';
import Header from '../components/Header';

function ProductoPage({ carrito = [], onAgregarProducto, onVaciar }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return (
      <>
        <Header 
          cantidad={carrito.reduce((acc, p) => acc + p.cantidad, 0)} 
          onVaciar={onVaciar} 
        />
        <Container className="text-center mt-5">
          <h2>Producto no encontrado</h2>
          <Button variant="primary" onClick={() => navigate('/catalogo')} className="mt-3">
            Volver al catálogo
          </Button>
        </Container>
      </>
    );
  }

  const productoEnCarrito = carrito.find((item) => item.id === producto.id);
  const cantidadEnCarrito = productoEnCarrito ? productoEnCarrito.cantidad : 0;

  const stockRestante = producto.stock - cantidadEnCarrito;
  const sinStock = stockRestante <= 0;

  const handleComprar = () => {
    if (sinStock) {
      alert("⚠️ Lo sentimos, no se pueden agregar más unidades. ¡Te quedaste sin stock disponible!");
    } else {
      onAgregarProducto(producto);
    }
  };

  return (
    <>
      <Header 
        cantidad={carrito.reduce((acc, p) => acc + p.cantidad, 0)} 
        onVaciar={onVaciar} 
      />
      
      <Container style={{ marginTop: 50, marginBottom: 50 }}>
        <Button variant="outline-success" onClick={() => navigate('/catalogo')} className="mb-4">
          ← Volver al Catálogo
        </Button>

        <Row className="align-items-center">
          {/* Columna de la Imagen: Quitamos cualquier fondo y centramos de forma limpia */}
          <Col md={6} className="text-center d-flex justify-content-center align-items-center">
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className="img-fluid" 
              style={{ 
                maxHeight: '600px', 
                objectFit: 'contain', 
                backgroundColor: 'transparent'
              }}
            />
          </Col>
          
          <Col md={6}>
            <span className="text-muted text-uppercase small">{producto.categoria}</span>
            <h1 className="fw-bold mt-2">{producto.nombre}</h1>
            <h2 className="text-success my-3">${producto.precio}</h2>
            
            <p className="lead">
              {producto.descripcion || "Sin descripción disponible para este artículo."}
            </p>
            
            <hr />
            
            <div className="my-4">
              <h5><strong>Disponibilidad:</strong></h5>
              <p className="mb-1">
                Stock total de la tienda: <span className="fw-bold">{stockRestante} unidades</span>.
              </p>
            </div>

            <Button 
              variant={sinStock ? "secondary" : "success"} 
              size="lg" 
              className="w-100"
              onClick={handleComprar}
              style={{ 
                opacity: sinStock ? 0.5 : 1, 
                cursor: sinStock ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {sinStock ? "Sin Stock Disponible" : "Agregar al carrito"}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductoPage;