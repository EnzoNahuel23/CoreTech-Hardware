import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './AppStyle.css';
import Inicio from './pages/InicioPage.jsx';
import CatalogoPage from './pages/CatalogoPage.jsx';
import ProductoPage from './pages/ProductoPage.jsx';
import CategoriaPage from './pages/CategoriaPage.jsx';
import BusquedaPage from './pages/BusquedaPage.jsx';
import CarritoPage from './pages/CarritoPage.jsx';
import Nosotros from './pages/NosotrosPage.jsx';
import { productos } from './data/productos.js';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const guardado = localStorage.getItem('coretech-darkmode');
    return guardado ? JSON.parse(guardado) : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('coretech-darkmode', JSON.stringify(darkMode));
  }, [darkMode]);

  const [notificacion, setNotificacion] = useState(null);

  useEffect(() => {
    if (notificacion) {
      const timer = setTimeout(() => setNotificacion(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [notificacion]);

  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('coretech-carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('coretech-carrito', JSON.stringify(carrito));
  }, [carrito]);

  const [stockDisponible, setStockDisponible] = useState(() => {
    const guardado = localStorage.getItem('coretech-stock');
    if (guardado) return JSON.parse(guardado);
    const inicial = {};
    productos.forEach((p) => { inicial[p.id] = p.stock; });
    return inicial;
  });

  useEffect(() => {
    localStorage.setItem('coretech-stock', JSON.stringify(stockDisponible));
  }, [stockDisponible]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    const stockActual = stockDisponible[producto.id] ?? 0;

    if (existe) {
      if (existe.cantidad >= stockActual) {
        alert("⚠️ ¡Atención! No puedes agregar más unidades, alcanzaste el límite de stock.");
        return;
      }
    } else if (stockActual <= 0) {
      alert("⚠️ Este producto no tiene stock disponible.");
      return;
    }

    setCarrito((carritoActual) => {
      if (existe) {
        return carritoActual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...carritoActual, { ...producto, cantidad: 1 }];
    });

    setNotificacion(producto.nombre);
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

  const finalizarCompra = () => {
    const nuevoStock = { ...stockDisponible };
    carrito.forEach((item) => {
      nuevoStock[item.id] = (nuevoStock[item.id] || 0) - item.cantidad;
    });
    setStockDisponible(nuevoStock);
    setCarrito([]);
  };

  const cantidadTotalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <BrowserRouter>
      <Header cantidad={cantidadTotalProductos} onVaciar={vaciarCarrito} darkMode={darkMode} onToggleDarkMode={() => setDarkMode((prev) => !prev)} notificacion={notificacion} />
      
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Inicio />} />
          
          <Route 
            path="/catalogo" 
            element={<CatalogoPage carrito={carrito} stockDisponible={stockDisponible} onAgregar={agregarAlCarrito} />} 
          />
          
          <Route 
            path="/producto/:id" 
            element={<ProductoPage carrito={carrito} stockDisponible={stockDisponible} onAgregarProducto={agregarAlCarrito} />} 
          />

          <Route 
            path="/categoria/:cat" 
            element={<CategoriaPage carrito={carrito} stockDisponible={stockDisponible} onAgregar={agregarAlCarrito} />} 
          />

          <Route 
            path="/buscar/:query" 
            element={<BusquedaPage carrito={carrito} stockDisponible={stockDisponible} onAgregar={agregarAlCarrito} />} 
          />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route 
            path="/carrito" 
            element={
              <CarritoPage 
                carrito={carrito} 
                onAgregar={agregarAlCarrito} 
                onRestar={restarDelCarrito} 
                onEliminar={eliminarDelCarrito} 
                onFinalizarCompra={finalizarCompra}
              />
            } 
          />
        </Routes>
      </main>

      <Footer />

      {notificacion && (
        <div className="toast-notificacion">
          <span className="toast-icono">✓</span>
          <span><strong>{notificacion}</strong> agregado al carrito</span>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;