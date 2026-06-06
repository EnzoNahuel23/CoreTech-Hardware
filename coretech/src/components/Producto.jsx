import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Producto({imagen, titulo, descripcion}) {
  return (
    <Card style={{marginTop:20}} className="h-100">
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button variant="primary">Click Aqui</Button>
      </Card.Body>
    </Card>
  );
}

export default Producto;