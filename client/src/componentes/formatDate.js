// formatDate.js

export function formatearFechaYHora(fecha) {
    const opcionesDeFormato = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return fecha.toLocaleString('en-US', opcionesDeFormato);
  }
  