import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Banner from '../components/Banner.jsx';

function Inicio({ carrito = [], onVaciar }) {
  const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <Header cantidad={cantidadTotal} onVaciar={onVaciar} />
      <Banner />
      <Footer />
    </>
  );
}

export default Inicio;