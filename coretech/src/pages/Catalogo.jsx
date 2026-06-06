import { Col, Container, Row } from 'react-bootstrap'
import Producto from '../components/Producto';



function Catalogo({onAgregarProducto}){
        const productos = [
            { id:1, nombre: "Teclado", precio: 50000, imagen:""},
            { id:2, nombre: "Monitor", precio: 200000, imagen:""},
            { id:3, nombre: "Mouse", precio: 40000, imagen:""},
            { id:4, nombre: "Gabinete", precio: 850000, imagen:""},
            { id:5, nombre: "Gabinete", precio: 850000, imagen:""}
        ]
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