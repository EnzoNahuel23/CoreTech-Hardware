import { Col, Container, Row } from 'react-bootstrap';
import Producto from './Producto';
import { productos } from '../data/productos';
import './CatalogoStyle.css';

function Catalogo({ carrito = [], stockDisponible = {}, alAgregarProducto }) {
  return (
    <div className="catalogo-wrapper">
      <Container>
        <Row className="g-5">
          {productos.map((producto) => {
            const itemEnCarrito = carrito.find((productoCarrito) => productoCarrito.id === producto.id);
            const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
            const stockRestante = (stockDisponible[producto.id] ?? producto.stock) - cantidadEnCarrito;

            return (
              <Col xs={12} sm={6} md={3} style={{ marginTop: 20 }} key={producto.id}>
                <Producto
                  id={producto.id}
                  imagen={producto.imagen}
                  titulo={producto.nombre}
                  precio={producto.precio} 
                  stockRestante={stockRestante} 
                  alAgregar={() => alAgregarProducto(producto)}
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