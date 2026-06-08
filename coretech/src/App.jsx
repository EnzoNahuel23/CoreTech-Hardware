import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/InicioPage.jsx';
import CatalogoPage from './pages/CatalogoPage.jsx';
import ProductoPage from './pages/ProductoPage.jsx';
import CategoriaPage from './pages/CategoriaPage.jsx';
import BusquedaPage from './pages/BusquedaPage.jsx';
import CarritoPage from './pages/CarritoPage.jsx';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const existe = carritoActual.find((item) => item.id === producto.id);

      if (existe) {
        if (existe.cantidad >= producto.stock) {
          alert("⚠️ ¡Atención! No puedes agregar más unidades, alcanzaste el límite de stock.");
          return carritoActual;
        }
        return carritoActual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
  };

  const restarDelCarrito = (productoId) => {
    setCarrito((carritoActual) => {
      const existe = carritoActual.find((item) => item.id === productoId);
      if (existe.cantidad === 1) {
        return carritoActual.filter((item) => item.id !== productoId);
      }
      return carritoActual.map((item) =>
        item.id === productoId ? { ...item, cantidad: item.cantidad - 1 } : item
      );
    });
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((carritoActual) => carritoActual.filter((item) => item.id !== productoId));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };


  const cantidadTotalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <BrowserRouter>
      <Header cantidad={cantidadTotalProductos} onVaciar={vaciarCarrito} />
      
      <main style={{ minHeight: '75vh' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          
          <Route 
            path="/catalogo" 
            element={<CatalogoPage carrito={carrito} onAgregar={agregarAlCarrito} />} 
          />
          
          <Route 
            path="/producto/:id" 
            element={<ProductoPage carrito={carrito} onAgregarProducto={agregarAlCarrito} />} 
          />

          <Route 
            path="/categoria/:cat" 
            element={<CategoriaPage carrito={carrito} onAgregar={agregarAlCarrito} />} 
          />

          <Route 
            path="/buscar/:query" 
            element={<BusquedaPage carrito={carrito} onAgregar={agregarAlCarrito} />} 
          />

          <Route 
            path="/carrito" 
            element={
              <CarritoPage 
                carrito={carrito} 
                onAgregar={agregarAlCarrito} 
                onRestar={restarDelCarrito} 
                onEliminar={eliminarDelCarrito} 
              />
            } 
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;