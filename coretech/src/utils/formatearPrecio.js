export function formatearPrecio(numero) {
  if (numero == null) return '$0';
  return '$' + numero.toLocaleString('es-AR');
}
