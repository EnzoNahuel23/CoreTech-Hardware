import { Col, Container, Row } from 'react-bootstrap';
import Producto from './Producto';
import { productos } from '../data/productos'; 

function Catalogo({ carrito = [], onAgregarProducto }) {
  return (
    <div style={{ marginTop: 20 }}>
      <Container>
        <Row className="g-5">
          {productos.map((p) => {
            // Buscamos si este producto ya está en el carrito para calcular el stock restante
            const itemEnCarrito = carrito.find((item) => item.id === p.id);
            const cantidadEnCarrito = itemEnCarrito ? itemEnCarrito.cantidad : 0;
            const stockRestante = p.stock - cantidadEnCarrito;

            return (
              <Col md={3} style={{ marginTop: 20 }} key={p.id}>
                <Producto
                  id={p.id}
                  imagen={p.imagen}
                  titulo={p.nombre}
                  precio={p.precio} // Ya viene con el signo "$" desde productos.js
                  stockRestante={stockRestante} // Le pasamos el número calculado
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