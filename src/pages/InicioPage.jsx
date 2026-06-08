import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Banner from '../components/Banner.jsx';
import './InicioPageStyle.css';

function Inicio() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero-section">
        <img
          src="/imagenes/logo.png"
          alt="CoreTech Logo"
          className="hero-logo"
        />
        <h1 className="hero-title">
          CoreTech
        </h1>
        <p className="hero-subtitle">
          Tu tienda de confianza para componentes de hardware, consolas y periféricos.
        </p>
        <p className="hero-description">
          En CoreTech nos apasiona la tecnología. Ofrecemos los mejores productos
          del mercado con la mejor atención, para que armes el setup de tus sueños.
        </p>
        <Button
          variant="success"
          size="lg"
          onClick={() => navigate('/catalogo')}
          className="hero-btn"
        >
          Ver Catálogo
        </Button>
      </div>

      <Banner />
    </>
  );
}

export default Inicio;