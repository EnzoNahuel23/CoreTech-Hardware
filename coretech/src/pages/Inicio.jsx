import { useState } from 'react';
import Header from '../components/Header.jsx'
import Producto from '../components/Producto.jsx'
import Footer from '../components/Footer.jsx'
import Catalogo from './CatalogoPage.jsx'
import Banner from '../components/Banner.jsx'

function Inicio() {

  const [cantidad, setCantidad] = useState(0);

  const vaciarCarrito = () => {
    setCantidad(0);
  };

  return (
    <>
      <Header cantidad={cantidad} onVaciar={vaciarCarrito}/>
      <Banner />
      
      <Footer />
    </>
  );
}

export default Inicio