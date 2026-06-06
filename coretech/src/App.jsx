import { useState } from 'react';
import Header from './components/Header.jsx'
import Producto from './components/Producto.jsx'
import Footer from './components/Footer.jsx'
import Catalogo from './pages/Catalogo.jsx'

function App() {
  // 2. Creamos el estado para la cantidad del carrito acá arriba
  const [cantidad, setCantidad] = useState(0);

  // 3. Creamos la función que incrementa el contador
  const agregarAlCarrito = () => {
    setCantidad(cantidad + 1);
  };

  // 1. Creamos la función para reiniciar el estado a 0
  const vaciarCarrito = () => {
    setCantidad(0);
  };

  return (
    <>
      <Header cantidad={cantidad} onVaciar={vaciarCarrito}/>
      <Catalogo onAgregarProducto={agregarAlCarrito}/>
      <Footer />
    </>
  );
}

export default App
