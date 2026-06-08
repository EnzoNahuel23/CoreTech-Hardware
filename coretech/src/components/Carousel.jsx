import Carousel from 'react-bootstrap/Carousel';
import './CarouselStyle.css';

function Imagenes() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 px-3 my-4">
      
      <Carousel className="carousel-container"> 
        
        <Carousel.Item>
          <img 
            className="d-block w-100 img-fluid mx-auto carousel-image" 
            src="/imagenes/inicio/carousel1.png" 
            alt="First slide" 
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100 img-fluid mx-auto carousel-image" 
            src="/imagenes/inicio/carousel2.png" 
            alt="Second slide" 
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100 img-fluid mx-auto carousel-image" 
            src="/imagenes/inicio/carousel3.png" 
            alt="Third slide" 
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Imagenes;