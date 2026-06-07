import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Imagenes() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 px-3 my-4">
      
      <Carousel style={{ maxWidth: '1000px', width: '100%' }}> 
        
        <Carousel.Item>
          <img 
            className="d-block w-100 img-fluid mx-auto" 
            src="/imagenes/inicio/carousel1.png" 
            alt="First slide" 
            style={{ objectFit: 'cover', maxHeight: '450px' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100 img-fluid mx-auto" 
            src="/imagenes/inicio/carousel2.png" 
            alt="Second slide" 
            style={{ objectFit: 'cover', maxHeight: '450px' }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100 img-fluid mx-auto" 
            src="/imagenes/inicio/carousel3.png" 
            alt="Third slide" 
            style={{ objectFit: 'cover', maxHeight: '450px' }}
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Imagenes;