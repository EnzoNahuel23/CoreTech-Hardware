import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

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
      style={{ 
        marginTop: 20,
        opacity: sinStock ? 0.5 : 1, // Opaca TODA la tarjeta (incluida la imagen) si no hay stock
        transition: 'all 0.2s ease-in-out'
      }} 
      className="h-100"
    >
      {/* Zona clickeable del producto */}
      <div 
        onClick={handleCardClick} 
        style={{ cursor: sinStock ? 'not-allowed' : 'pointer' }}
      >
        <Card.Img 
          variant="top" 
          src={imagen} 
          style={{ backgroundColor: 'transparent' }} 
        />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text className="text-success fw-bold">{precio}</Card.Text>
        </Card.Body>
      </div>
      
      <Card.Footer className="bg-white border-0">
        <Button 
          variant={sinStock ? "secondary" : "success"} 
          onClick={onAgregar} 
          className="w-100"
          disabled={sinStock} // Deshabilita el botón si no hay stock
          style={{ cursor: sinStock ? 'not-allowed' : 'pointer' }}
        >
          {sinStock ? "Sin Stock" : "Agregar al carrito"}
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Producto;