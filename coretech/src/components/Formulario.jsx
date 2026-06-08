import { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

function Formulario({ carrito = [], onCompraExitosa }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [localidad, setLocalidad] = useState('');
  const [entrega, setEntrega] = useState('Retiro en local');
  const [mensaje, setMensaje] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (carrito.length === 0) {
      setError('⚠️ El carrito está vacío. Agregá productos antes de confirmar la compra.');
      return;
    }

    if (!nombre.trim() || !email.trim() || !telefono.trim() || !localidad.trim()) {
      setError('⚠️ Todos los campos son obligatorios para poder coordinar el envío.');
      return;
    }

    // Validación de formato de Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('⚠️ Por favor, ingresa un correo electrónico válido.');
      return;
    }

    onCompraExitosa();

    setNombre('');
    setEmail('');
    setTelefono('');
    setLocalidad('');
    setEntrega('Retiro en local');
    setMensaje('');
  };

  return (
    <div className="bg-body p-4 rounded border shadow-sm mt-4">
      <h4 className="fw-bold mb-3 text-secondary">Completa tus datos para coordinar la entrega</h4>
      <p className="text-muted small mb-4">Necesitamos esta información para procesar el despacho de tus componentes.</p>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formNombre">
              <Form.Label className="fw-semibold">Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Pérez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label className="fw-semibold">Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juan@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formTelefono">
              <Form.Label className="fw-semibold">Teléfono de Contacto</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Ej: 1123456789"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="formLocalidad">
              <Form.Label className="fw-semibold">Dirección o Localidad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Hurlingham, Buenos Aires"
                value={localidad}
                onChange={(e) => setLocalidad(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={12}>
            <Form.Group controlId="formEntrega">
              <Form.Label className="fw-semibold">Método de Entrega</Form.Label>
              <Form.Select value={entrega} onChange={(e) => setEntrega(e.target.value)}>
                <option value="Retiro en local">Retiro en sucursal (Gratis)</option>
                <option value="Envio a domicilio">Envío a domicilio por correo</option>
                <option value="Motomensajeria">Motomensajería express</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formMensaje" className="mb-4">
          <Form.Label className="fw-semibold">Mensaje o Aclaración Opcional</Form.Label>
          <Form.Control
            as="textarea"
            rows={2}
            placeholder="Indicaciones para el cartero o aclaraciones..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit" size="lg" className="w-100 fw-bold py-2">
          Confirmar y Finalizar Compra
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;