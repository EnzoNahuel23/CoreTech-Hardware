import { Col, Container, Row } from 'react-bootstrap'
import Producto from './Producto';
import { productos } from '../data/productos'

function Catalogo({onAgregarProducto}){
    
    return (
        <div style={{marginTop:20}}>

                <Container>
                    <Row className="g-5">
                        {productos.map( (p) => (<Col md={3} style={{marginTop:20}}> <Producto imagen={p.imagen} titulo={p.nombre} descripcion={p.precio} onAgregar={onAgregarProducto}/> </Col>)) }
                    </Row>
                </Container>

        </div>
    );
}

export default Catalogo;