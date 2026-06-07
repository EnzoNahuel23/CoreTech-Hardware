import { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Banner from '../components/Banner.jsx';

function Inicio() {
  const [cantidad, setCantidad] = useState(0);

  const vaciarCarrito = () => {
    setCantidad(0);
  };

  return (
    <>
      <Header cantidad={cantidad} onVaciar={vaciarCarrito} />
      <Banner />
      <Footer />
    </>
  );
}

export default Inicio;