function formatPrecio(n) {
  return '$' + n.toLocaleString('es-AR');
}

function iconoCat(cat) {
  const icons = {
    Lanas:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/><path d="M2 12h20"/></svg>`,
    Hilos:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32"><path d="M5 12c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7"/><path d="M12 5v14M5 12h14"/></svg>`,
    Agujas:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32"><line x1="4" y1="20" x2="20" y2="4"/><polyline points="14 4 20 4 20 10"/></svg>`,
    Cintas:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
    Botones:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="2" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="22" y2="12"/></svg>`,
    Telas:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32"><path d="M4 4h16v16H4z"/><path d="M4 8h16M4 12h16M4 16h16M8 4v16M12 4v16M16 4v16"/></svg>`,
    Accesorios: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="32" height="32"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M20 12h2M2 12h2M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 20v2M12 2v2"/></svg>`,
  };
  return icons[cat] || icons['Accesorios'];
}

// Genera un ID de pedido único basado en timestamp — formato PED-YYYYMMDD-XXXX
function generarNroPedido() {
  const now  = new Date();
  const date = now.getFullYear().toString()
             + String(now.getMonth() + 1).padStart(2, '0')
             + String(now.getDate()).padStart(2, '0');
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PED-${date}-${rand}`;
}
