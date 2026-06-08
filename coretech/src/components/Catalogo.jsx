import { Col, Container, Row } from 'react-bootstrap';
import Producto from './Producto';
import { productos } from '../data/productos';
import './CatalogoStyle.css';

function Catalogo({ carrito = [], stockDisponible = {}, onAgregarProducto }) {
  return (
    <div className="catalogo-wrapper">
      <Container>
        <Row className="g-5">
          {productos.map((p) => {
            const itemEnCarrito = carrito.find((item) => item.id === p.id);
            const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
            const stockRestante = (stockDisponible[p.id] ?? p.stock) - cantidadEnCarrito;

            return (
              <Col xs={12} sm={6} md={3} style={{ marginTop: 20 }} key={p.id}>
                <Producto
                  id={p.id}
                  imagen={p.imagen}
                  titulo={p.nombre}
                  precio={p.precio} 
                  stockRestante={stockRestante} 
                  onAgregar={() => onAgregarProducto(p)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Catalogo;