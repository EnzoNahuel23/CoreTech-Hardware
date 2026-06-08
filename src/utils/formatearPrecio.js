export function formatearPrecio(valor) {
  if (valor == null) return '$0';
  return '$' + valor.toLocaleString('es-AR');
}
