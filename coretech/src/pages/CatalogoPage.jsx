import Catalogo from '../components/Catalogo.jsx';

function CatalogoPage({ carrito, onAgregar }) {
  return (
    <>
      <Catalogo carrito={carrito} onAgregarProducto={onAgregar} />
    </>
  );
}

export default CatalogoPage;