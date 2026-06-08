import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import Formulario from '../components/Formulario.jsx';
import { formatearPrecio } from '../utils/formatearPrecio.js';
import './CarritoPageStyle.css';

function CarritoPage({ carrito = [], onAgregar, onRestar, onEliminar, onVaciar, onFinalizarCompra }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const cantidadTotalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  
  const totalGeneralDinero = carrito.reduce((acc, item) => {
    return acc + (item.precio * item.cantidad);
  }, 0);

  const activarSimulacionCompra = () => {
    setShowModal(true);
  };

  const handleCerrarModalYVaciar = () => {
    setShowModal(false);
    if (onFinalizarCompra) {
      onFinalizarCompra();
    } else {
      onVaciar();
    }
    navigate('/');
  };

  return (
    <Container className="carrito-page-container">
      <h2 className="fw-bold mb-4">Tu Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <div className="text-center my-5 py-5">
          <h3>El carrito está vacío 🛒</h3>
          <Button variant="success" size="lg" onClick={() => navigate('/catalogo')} className="mt-3">
            Ir al Catálogo
          </Button>
        </div>
      ) : (
        <Row className="g-4">
          <Col xs={12} lg={7}>
            <Table responsive hover className="align-middle border shadow-sm rounded bg-body">
              <thead className="table-dark">
                <tr>
                  <th>Item</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th className="text-center">Cant.</th>
                  <th>Subtotal</th>
                  <th className="text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item) => {
                  const subtotalItem = item.precio * item.cantidad;

                  return (
                    <tr key={item.id}>
                      <td>
                        <img src={item.imagen} alt={item.nombre} className="carrito-page-img" />
                      </td>
                      <td className="fw-semibold small">{item.nombre}</td>
                      <td className="small">{formatearPrecio(item.precio)}</td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center gap-1">
                          <Button variant="outline-secondary" size="sm" onClick={() => onRestar(item.id)}>-</Button>
                          <span className="fw-bold px-1 small">{item.cantidad}</span>
                          <Button variant="outline-secondary" size="sm" onClick={() => onAgregar(item)}>+</Button>
                        </div>
                      </td>
                      <td className="fw-bold text-body small">{formatearPrecio(subtotalItem)}</td>
                      <td className="text-center">
                        <Button variant="text" className="text-danger p-0 small text-decoration-underline" onClick={() => onEliminar(item.id)}>
                          Quitar
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>

          <Col xs={12} lg={5}>
            <div className="bg-body p-4 rounded border shadow-sm mb-3">
              <h4 className="fw-bold mb-3">Resumen del Pedido</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Artículos totales:</span>
                <span className="fw-bold">{cantidadTotalProductos} unidades</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-2 fs-5">
                <strong>Total General:</strong>
                <strong className="text-success">{formatearPrecio(totalGeneralDinero)}</strong>
              </div>
            </div>

            <Formulario carrito={carrito} onCompraExitosa={activarSimulacionCompra} />
          </Col>
        </Row>
      )}

      <Modal show={showModal} onHide={handleCerrarModalYVaciar} centered backdrop="static">
        <Modal.Header className="bg-success text-white">
          <Modal.Title>🎉 ¡Pedido Confirmado!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <h4 className="text-success fw-bold mb-3">¡Operación exitosa!</h4>
          <p>Tu orden por un total de <strong>{formatearPrecio(totalGeneralDinero)}</strong> fue simulada correctamente.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <Button variant="success" size="lg" onClick={handleCerrarModalYVaciar}>
            Volver a la Tienda
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default CarritoPage;