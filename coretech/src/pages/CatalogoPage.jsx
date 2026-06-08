import Catalogo from '../components/Catalogo.jsx';

function CatalogoPage({ carrito, stockDisponible, onAgregar }) {
  return (
    <>
      <Catalogo carrito={carrito} stockDisponible={stockDisponible} onAgregarProducto={onAgregar} />
    </>
  );
}

export default CatalogoPage;