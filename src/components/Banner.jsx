import { Container, Row, Image, Col } from "react-bootstrap";
import Imagenes from "./Carousel";
import './BannerStyle.css';

function Banner() {
  return (
    <div className="my-4">

      <Imagenes />

      <Container className="mt-5">
        <Row className="g-4 justify-content-center">

          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src="/imagenes/inicio/consolas.png" rounded fluid className="banner-image" />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src="/imagenes/inicio/ensamblados.png" rounded fluid className="banner-image" />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src="/imagenes/inicio/almacenamiento.png" rounded fluid className="banner-image" />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src="/imagenes/inicio/fuentes.png" rounded fluid className="banner-image" />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src="/imagenes/inicio/motherboards.png" rounded fluid className="banner-image" />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src="/imagenes/inicio/perifericos.png" rounded fluid className="banner-image" />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src="/imagenes/inicio/placas.png" rounded fluid className="banner-image" />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image src="/imagenes/inicio/ram.png" rounded fluid className="banner-image" />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Banner;