import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Catalogo from '../components/Catalogo.jsx';

function CatalogoPage({ carrito = [], onAgregar, onVaciar }) {
  // Sumamos la cantidad de todos los productos agregados para pasarle el número total al Header
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <Header cantidad={cantidadTotal} onVaciar={onVaciar} />
      <Catalogo carrito={carrito} onAgregarProducto={onAgregar} />
      <Footer />
    </>
  );
}

export default CatalogoPage;