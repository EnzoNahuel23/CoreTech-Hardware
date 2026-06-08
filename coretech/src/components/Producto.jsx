import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { formatearPrecio } from '../utils/formatearPrecio.js';
import './ProductoStyle.css';

function Producto({ id, imagen, titulo, precio, stockRestante, onAgregar }) {
  const navigate = useNavigate();
  const sinStock = stockRestante <= 0;

  const handleCardClick = () => {
    if (sinStock) {
      alert("⚠️ Este producto no tiene stock disponible en este momento y no se puede ver el detalle.");
    } else {
      navigate(`/producto/${id}`);
    }
  };

  return (
    <Card 
      className={`producto-card h-100 ${sinStock ? 'sin-stock' : ''}`}
    >
      <div 
        onClick={handleCardClick} 
        className="producto-card-link"
      >
        <Card.Img 
          variant="top" 
          src={imagen} 
          className="producto-img"
        />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text className="text-success fw-bold">{formatearPrecio(precio)}</Card.Text>
        </Card.Body>
      </div>
      
      <Card.Footer className="bg-body border-0">
        <Button 
          variant={sinStock ? "secondary" : "success"} 
          onClick={onAgregar} 
          className="w-100 producto-btn"
          disabled={sinStock}
        >
          {sinStock ? "Sin Stock" : "Agregar al carrito"}
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Producto;