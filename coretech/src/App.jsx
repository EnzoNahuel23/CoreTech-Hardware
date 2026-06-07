import { useState } from 'react';
import Inicio from './pages/Inicio.jsx';
import CatalogoPage from './pages/CatalogoPage.jsx';

function App() {
  // Estado para controlar qué pantalla ver: 'inicio' o 'catalogo'
  const [seccion, setSeccion] = useState('inicio');

  // Función que cambia la pantalla actual
  const cambiarPantalla = (nuevaPantalla) => {
    setSeccion(nuevaPantalla);
  };

  return (
    <>
      {seccion === 'inicio' ? (
        <Inicio onNavegar={cambiarPantalla} />
      ) : (
        <CatalogoPage onNavegar={cambiarPantalla} />
      )}
    </>
  );
}

export default App;