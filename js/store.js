function tienda() {
  return {
    // Estado
    CATEGORIAS,
    PRODUCTOS,
    destacados: DESTACADOS,
    slidActivo: 0,
    carrito: [],
    carritoOpen: false,
    menuOpen: false,
    busqueda: '',
    filtroActivo: 'Todos',
    addedMap: {},
    addedDestacados: {},
    cantidades: {},
    cantidadesDestacado: {},
    searchOpen: false,
    form: { nombre: '', email: '', mensaje: '' },
    formErrors: {},
    formEnviado: false,
    formEnviando: false,
    formErrorEnvio: false,

    // Computed
    get cantidadTotal() {
      return this.carrito.reduce((s, i) => s + i.cantidad, 0);
    },
    get total() {
      return this.carrito.reduce((s, i) => s + i.precio * i.cantidad, 0);
    },
    get productosFiltrados() {
      const q = this.busqueda.toLowerCase();
      return PRODUCTOS.filter(p => {
        const matchCat = this.filtroActivo === 'Todos' || p.categoria === this.filtroActivo;
        const matchQ   = !q || p.nombre.toLowerCase().includes(q) || p.descripcion.toLowerCase().includes(q);
        return matchCat && matchQ;
      });
    },

    // Helpers qty selectors
    getCantidad(id)       { return this.cantidades[id] || 1; },
    setCantidad(id, val)  { this.cantidades[id] = Math.max(1, parseInt(val) || 1); },

    // Carrito
    agregar(p) {
      const qty = this.getCantidad(p.id);
      const ex  = this.carrito.find(i => i.id === p.id);
      if (ex) { ex.cantidad += qty; }
      else     { this.carrito.push({ ...p, cantidad: qty }); }
      this.addedMap[p.id] = true;
      setTimeout(() => { this.addedMap[p.id] = false; }, 1500);
    },
    agregarDestacado(prod) {
      const qty = this.getCantDestacado(prod.id);
      const ex  = this.carrito.find(i => i.id === prod.id);
      if (ex) { ex.cantidad += qty; }
      else     { this.carrito.push({ ...prod, cantidad: qty }); }
      this.addedDestacados[prod.id] = true;
      setTimeout(() => { this.addedDestacados[prod.id] = false; }, 1500);
    },
    getCantDestacado(id)      { return this.cantidadesDestacado[id] || 1; },
    setCantDestacado(id, val) { this.cantidadesDestacado[id] = Math.max(1, parseInt(val) || 1); },
    prevSlide() { this.slidActivo = (this.slidActivo - 1 + this.destacados.length) % this.destacados.length; },
    nextSlide() { this.slidActivo = (this.slidActivo + 1) % this.destacados.length; },
    incrementar(id) {
      const i = this.carrito.find(x => x.id === id);
      if (i) i.cantidad++;
    },
    decrementar(id) {
      const idx = this.carrito.findIndex(x => x.id === id);
      if (idx === -1) return;
      if (this.carrito[idx].cantidad > 1) { this.carrito[idx].cantidad--; }
      else                                 { this.carrito.splice(idx, 1); }
    },
    eliminar(id) { this.carrito = this.carrito.filter(i => i.id !== id); },

    // WhatsApp — incluye número de pedido generado con localStorage
    pedirPorWsp() {
      if (!this.carrito.length) return;
      const nroPedido = generarNroPedido();
      const lineas = this.carrito
        .map(i => `• ${i.nombre} x${i.cantidad} — ${formatPrecio(i.precio * i.cantidad)}`)
        .join('\n');
      const msg = `Hola! Quiero realizar el *Pedido N° ${nroPedido}* 🛍️\n\n${lineas}\n\n*Total: ${formatPrecio(this.total)}*\n\nQuedo a la espera, ¡muchas gracias!`;
      window.open(`https://wa.me/5491132607001?text=${encodeURIComponent(msg)}`, '_blank');
    },

    // Filtros
    activarFiltro(cat) {
      this.filtroActivo = this.filtroActivo === cat ? 'Todos' : cat;
      this.menuOpen = false;
      document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    },

    // Búsqueda navbar
    toggleSearch() {
      this.searchOpen = !this.searchOpen;
      if (!this.searchOpen) this.busqueda = '';
    },

    // Helpers (delegados a utils.js para mantener Alpine templates limpios)
    formatPrecio(n)   { return formatPrecio(n); },
    iconoCat(cat)     { return iconoCat(cat); },

    // Contacto — relay via Google Apps Script
    // Reemplazá SCRIPT_URL con la URL de tu Web App (script.google.com)
    async enviarContacto() {
      const SCRIPT_URL = 'TU_URL_DEL_SCRIPT';

      this.formErrors = {};
      this.formErrorEnvio = false;
      if (!this.form.nombre.trim())  this.formErrors.nombre  = 'El nombre es requerido.';
      if (!this.form.email.trim()) {
        this.formErrors.email = 'El email es requerido.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.formErrors.email = 'El formato del email no es válido.';
      }
      if (!this.form.mensaje.trim()) this.formErrors.mensaje = 'El mensaje es requerido.';
      if (Object.keys(this.formErrors).length) return;

      this.formEnviando = true;
      try {
        // mode: 'no-cors' evita el error CORS del redirect de Apps Script.
        // No podemos leer la respuesta, pero el mail se envía igual.
        await fetch(SCRIPT_URL, {
          method:  'POST',
          mode:    'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body:    JSON.stringify({
            nombre:  this.form.nombre,
            email:   this.form.email,
            mensaje: this.form.mensaje,
          }),
        });
        this.formEnviado = true;
      } catch {
        this.formErrorEnvio = true;
      } finally {
        this.formEnviando = false;
      }
    },
  };
}
