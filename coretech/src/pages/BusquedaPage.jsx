import { useParams, useNavigate } from 'react-router-dom';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Producto from '../components/Producto.jsx';
import { productos } from '../data/productos';

function BusquedaPage({ carrito = [], onAgregar, onVaciar }) {
  const { query } = useParams();
  const navigate = useNavigate();

  const productosEncontrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(query.toLowerCase())
  );

  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <Header cantidad={cantidadTotal} onVaciar={onVaciar} />
      
      <Container style={{ marginTop: 40, marginBottom: 50 }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Resultados de la búsqueda</h2>
            <p className="text-muted">Mostrando resultados para: <strong>"{query}"</strong></p>
          </div>
          <Button variant="outline-primary" onClick={() => navigate('/catalogo')}>
            Ver Todo el Catálogo →
          </Button>
        </div>

        {productosEncontrados.length === 0 ? (
          <div className="text-center my-5 py-5">
            <h4>No se encontraron productos que coincidan con "{query}".</h4>
            <p className="text-muted">Probá buscando con otra palabra o revisá la ortografía.</p>
          </div>
        ) : (
          <Row className="g-4">
            {productosEncontrados.map((p) => {
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
      
      <Footer />
    </>
  );
}

export default BusquedaPage;