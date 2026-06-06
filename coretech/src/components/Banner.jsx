import { Container, Row, Image, Col } from "react-bootstrap";
import Imagenes from "./Carousel"; 

function Banner() {
  return (
    <div className="my-4">
        
      <Imagenes />

      <Container className="mt-5">
        <Row className="g-4 justify-content-center">

          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image 
              src="/imagenes/consolas.png" 
              rounded 
              fluid
              style={{ 
                maxHeight: "500px", 
                width: "100%",
                objectFit: "contain"
              }} 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image 
              src="/imagenes/ensamblados.png" 
              rounded 
              fluid
              style={{ 
                maxHeight: "500px", 
                width: "100%",
                objectFit: "contain"
              }} 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image 
              src="/imagenes/almacenamiento.png" 
              rounded 
              fluid
              style={{ 
                maxHeight: "500px", 
                width: "100%",
                objectFit: "contain"
              }} 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image 
              src="/imagenes/fuentes.png" 
              rounded 
              fluid
              style={{ 
                maxHeight: "500px", 
                width: "100%",
                objectFit: "contain"
              }} 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image 
              src="/imagenes/motherboards.png" 
              rounded 
              fluid
              style={{ 
                maxHeight: "500px", 
                width: "100%",
                objectFit: "contain"
              }} 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image 
              src="/imagenes/perifericos.png" 
              rounded 
              fluid
              style={{ 
                maxHeight: "500px", 
                width: "100%",
                objectFit: "contain"
              }} 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image 
              src="/imagenes/placas.png" 
              rounded 
              fluid
              style={{ 
                maxHeight: "500px", 
                width: "100%",
                objectFit: "contain"
              }} 
            />
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center">
            <Image 
              src="/imagenes/ram.png" 
              rounded 
              fluid
              style={{ 
                maxHeight: "500px", 
                width: "100%",
                objectFit: "contain"
              }} 
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Banner;