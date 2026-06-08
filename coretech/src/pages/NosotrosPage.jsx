import { Container, Row, Col, Card } from 'react-bootstrap';
import './NosotrosPageStyle.css';

function Nosotros() {
  return (
    <Container className="nosotros-page-container">
      <div className="nosotros-header">
        <img src="/imagenes/logo.png" alt="CoreTech Logo" className="nosotros-logo" />
        <h1 className="nosotros-title">Sobre Nosotros</h1>
        <p className="nosotros-subtitle">
          Conocé quiénes somos y por qué confiar en nosotros para armar tu setup ideal.
        </p>
      </div>

      <Row className="g-4 justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <Card className="nosotros-card h-100">
            <Card.Body>
              <h3 className="nosotros-card-title">Misión</h3>
              <p className="nosotros-card-text">
                Proveer a nuestros clientes los mejores componentes de hardware y tecnología
                del mercado, combinando calidad, precio y una atención personalizada que
                haga de cada compra una experiencia única.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4}>
          <Card className="nosotros-card h-100">
            <Card.Body>
              <h3 className="nosotros-card-title">Visión</h3>
              <p className="nosotros-card-text">
                Convertirnos en la tienda de referencia para la comunidad tech de Argentina,
                siendo reconocidos por nuestra variedad de productos, asesoramiento experto
                y compromiso con la satisfacción del cliente.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4}>
          <Card className="nosotros-card h-100">
            <Card.Body>
              <h3 className="nosotros-card-title">Valores</h3>
              <p className="nosotros-card-text">
                Nos guía la pasión por la tecnología, la honestidad en cada recomendación,
                la responsabilidad en cada entrega y el compromiso de ofrecer siempre la
                mejor relación precio-producto.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="nosotros-historia">
        <h2>Nuestra Historia</h2>
        <p>
          CoreTech nació en 2020 como un proyecto universitario impulsado por un grupo de
          estudiantes apasionados por el hardware. Lo que comenzó como una idea para acercar
          componentes de calidad a precios accesibles, hoy es una tienda online que atiende a
          cientos de clientes en todo el país.
        </p>
        <p>
          Trabajamos día a día para ampliar nuestro catálogo, mejorar nuestra plataforma y
          brindar la mejor experiencia de compra online. Creemos en el poder de la tecnología
          para transformar vidas, y queremos ser parte de tu próximo proyecto.
        </p>
      </div>
    </Container>
  );
}

export default Nosotros;
