import Catalogo from '../components/Catalogo.jsx';

function CatalogoPage({ carrito, stockDisponible, alAgregar }) {
  return (
    <>
      <Catalogo carrito={carrito} stockDisponible={stockDisponible} alAgregarProducto={alAgregar} />
    </>
  );
}

export default CatalogoPage;