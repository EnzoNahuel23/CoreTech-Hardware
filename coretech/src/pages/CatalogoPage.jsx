import { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Catalogo from '../components/Catalogo.jsx';

// Recibimos 'onNavegar' desde App.jsx
function CatalogoPage({ onNavegar }) {
  const [cantidad, setCantidad] = useState(0);

  const agregarAlCarrito = () => {
    setCantidad(cantidad + 1);
  };

  const vaciarCarrito = () => {
    setCantidad(0);
  };

  return (
    <>
      {/* Pasamos 'onNavegar' también aquí */}
      <Header 
        cantidad={cantidad} 
        onVaciar={vaciarCarrito} 
        onNavegar={onNavegar} 
      />
      <Catalogo onAgregarProducto={agregarAlCarrito} />
      <Footer />
    </>
  );
}

export default CatalogoPage;