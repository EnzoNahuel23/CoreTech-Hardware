import { Col, Container, Row } from 'react-bootstrap'
import Producto from '../components/Producto';



function Catalogo({onAgregarProducto}){
        const productos = [
            { id:1, nombre: "Teclado", precio: 50000, imagen:"/imagenes/hero.png", categoria:""},
            { id:2, nombre: "Monitor", precio: 200000, imagen:"/imagenes/hero.png", categoria:""},
            { id:3, nombre: "Mouse", precio: 40000, imagen:"/imagenes/hero.png", categoria:""},
            { id:4, nombre: "Gabinete", precio: 850000, imagen:"/imagenes/hero.png", categoria:""},
            { id:5, nombre: "Gabinete", precio: 850000, imagen:"/imagenes/hero.png", categoria:""},
            { id:6, nombre: "Teclado", precio: 50000, imagen:"/imagenes/hero.png", categoria:""},
            { id:7, nombre: "Monitor", precio: 200000, imagen:"/imagenes/hero.png", categoria:""},
            { id:8, nombre: "Mouse", precio: 40000, imagen:"/imagenes/hero.png", categoria:""},
            { id:9, nombre: "Gabinete", precio: 850000, imagen:"/imagenes/hero.png", categoria:""},
            { id:10, nombre: "Gabinete", precio: 850000, imagen:"/imagenes/hero.png", categoria:""},
            { id:11, nombre: "Teclado", precio: 50000, imagen:"/imagenes/hero.png", categoria:""},
            { id:12, nombre: "Monitor", precio: 200000, imagen:"/imagenes/hero.png", categoria:""},
            { id:13, nombre: "Mouse", precio: 40000, imagen:"/imagenes/hero.png", categoria:""},
            { id:14, nombre: "Gabinete", precio: 850000, imagen:"/imagenes/hero.png", categoria:""},
            { id:15, nombre: "Gabinete", precio: 850000, imagen:"/imagenes/hero.png", categoria:""},
            { id:16, nombre: "Teclado", precio: 50000, imagen:"/imagenes/hero.png", categoria:""},
            { id:17, nombre: "Monitor", precio: 200000, imagen:"/imagenes/hero.png", categoria:""},
            { id:18, nombre: "Mouse", precio: 40000, imagen:"/imagenes/hero.png", categoria:""},
            { id:19, nombre: "Gabinete", precio: 850000, imagen:"/imagenes/hero.png", categoria:""},
            { id:20, nombre: "Gabinete", precio: 850000, imagen:"/imagenes/hero.png", categoria:""}
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