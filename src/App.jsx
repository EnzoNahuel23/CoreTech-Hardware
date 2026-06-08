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
  const [modoOscuro, setModoOscuro] = useState(() => {
    const almacenado = localStorage.getItem('coretech-darkmode');
    return almacenado ? JSON.parse(almacenado) : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', modoOscuro ? 'dark' : 'light');
    localStorage.setItem('coretech-darkmode', JSON.stringify(modoOscuro));
  }, [modoOscuro]);

  const cambiarModoOscuro = () => setModoOscuro((valorActual) => !valorActual);

  const [notificacion, setNotificacion] = useState(null);

  useEffect(() => {
    if (notificacion) {
      const temporizador = setTimeout(() => setNotificacion(null), 2500);
      return () => clearTimeout(temporizador);
    }
  }, [notificacion]);

  const [carrito, setCarrito] = useState(() => {
    const almacenado = localStorage.getItem('coretech-carrito');
    return almacenado ? JSON.parse(almacenado) : [];
  });

  useEffect(() => {
    localStorage.setItem('coretech-carrito', JSON.stringify(carrito));
  }, [carrito]);

  const [stockDisponible, setStockDisponible] = useState(() => {
    const almacenado = localStorage.getItem('coretech-stock');
    if (almacenado) return JSON.parse(almacenado);
    const inicial = {};
    productos.forEach((producto) => { inicial[producto.id] = producto.stock; });
    return inicial;
  });

  useEffect(() => {
    localStorage.setItem('coretech-stock', JSON.stringify(stockDisponible));
  }, [stockDisponible]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((productoCarrito) => productoCarrito.id === producto.id);
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
        return carritoActual.map((productoCarrito) =>
          productoCarrito.id === producto.id ? { ...productoCarrito, cantidad: productoCarrito.cantidad + 1 } : productoCarrito
        );
      }
      return [...carritoActual, { ...producto, cantidad: 1 }];
    });

    setNotificacion(producto.nombre);
  };

  const restarDelCarrito = (productoId) => {
    setCarrito((carritoActual) => {
      const existe = carritoActual.find((productoCarrito) => productoCarrito.id === productoId);
      if (existe.cantidad === 1) {
        return carritoActual.filter((productoCarrito) => productoCarrito.id !== productoId);
      }
      return carritoActual.map((productoCarrito) =>
        productoCarrito.id === productoId ? { ...productoCarrito, cantidad: productoCarrito.cantidad - 1 } : productoCarrito
      );
    });
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito((carritoActual) => carritoActual.filter((productoCarrito) => productoCarrito.id !== productoId));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const finalizarCompra = () => {
    const nuevoStock = { ...stockDisponible };
carrito.forEach((producto) => {
    nuevoStock[producto.id] = (nuevoStock[producto.id] || 0) - producto.cantidad;
    });
    setStockDisponible(nuevoStock);
    setCarrito([]);
  };

  const cantidadTotalProductos = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);

  return (
    <BrowserRouter>
      <Header cantidad={cantidadTotalProductos} alVaciar={vaciarCarrito} modoOscuro={modoOscuro} alCambiarModoOscuro={cambiarModoOscuro} notificacion={notificacion} />
      
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Inicio />} />
          
          <Route 
            path="/catalogo" 
            element={<CatalogoPage carrito={carrito} stockDisponible={stockDisponible} alAgregar={agregarAlCarrito} />} 
          />
          
          <Route 
            path="/producto/:id" 
            element={<ProductoPage carrito={carrito} stockDisponible={stockDisponible} alAgregarProducto={agregarAlCarrito} />} 
          />

          <Route 
            path="/categoria/:cat" 
            element={<CategoriaPage carrito={carrito} stockDisponible={stockDisponible} alAgregar={agregarAlCarrito} />} 
          />

          <Route 
            path="/buscar/:query" 
            element={<BusquedaPage carrito={carrito} stockDisponible={stockDisponible} alAgregar={agregarAlCarrito} />} 
          />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route 
            path="/carrito" 
            element={
              <CarritoPage 
                carrito={carrito} 
                alAgregar={agregarAlCarrito} 
                alRestar={restarDelCarrito} 
                alEliminar={eliminarDelCarrito} 
                alFinalizarCompra={finalizarCompra}
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