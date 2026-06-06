// src/components/Footer.jsx
function Footer() {
  const footerStyle = {
    background: '#1F2937',
    color: '#9CA3AF',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
    borderTop: '1px solid #374151',
    fontSize: '14px'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 Coretech - Tienda de productos de Hardware</p>
      <p style={{ fontSize: '12px', marginTop: '5px' }}>
        Construcción de Interfaces de Usuario - UNAHUR
      </p>
    </footer>
  );
}

export default Footer;