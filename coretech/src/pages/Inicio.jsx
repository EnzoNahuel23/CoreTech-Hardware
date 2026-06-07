import { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Banner from '../components/Banner.jsx';

// Recibimos 'onNavegar' desde App.jsx
function Inicio({ onNavegar }) {
  const [cantidad, setCantidad] = useState(0);

  const vaciarCarrito = () => {
    setCantidad(0);
  };

  return (
    <>
      {/* Pasamos 'onNavegar' directamente al Header */}
      <Header 
        cantidad={cantidad} 
        onVaciar={vaciarCarrito} 
        onNavegar={onNavegar} 
      />
      <Banner />
      <Footer />
    </>
  );
}

export default Inicio;