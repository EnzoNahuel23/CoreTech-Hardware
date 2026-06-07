import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/InicioPage.jsx';
import CatalogoPage from './pages/CatalogoPage.jsx';
import ProductoPage from './pages/ProductoPage.jsx';
import CategoriaPage from './pages/CategoriaPage.jsx';
import BusquedaPage from './pages/BusquedaPage.jsx'; // ← Importamos la nueva página de búsqueda

function App() {
  const [carrito, setCarrito] = useState([]);

  // Agregar al carrito controlando que no pase el stock máximo del producto
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

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio carrito={carrito} onVaciar={vaciarCarrito} />} />
        
        <Route 
          path="/catalogo" 
          element={<CatalogoPage carrito={carrito} onAgregar={agregarAlCarrito} onVaciar={vaciarCarrito} />} 
        />
        
        <Route 
          path="/producto/:id" 
          element={<ProductoPage carrito={carrito} onAgregarProducto={agregarAlCarrito} onVaciar={vaciarCarrito} />} 
        />

        <Route 
          path="/categoria/:cat" 
          element={<CategoriaPage carrito={carrito} onAgregar={agregarAlCarrito} onVaciar={vaciarCarrito} />} 
        />

        {/* NUEVA RUTA: El :query guardará la palabra que la persona escribió */}
        <Route 
          path="/buscar/:query" 
          element={<BusquedaPage carrito={carrito} onAgregar={agregarAlCarrito} onVaciar={vaciarCarrito} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;