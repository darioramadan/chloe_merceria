# Contexto — Landing Chloe Mercería

## Descripción del proyecto
Landing page estática para Chloe Mercería, una tienda de Buenos Aires que vende lanas, hilos, agujas, telas y accesorios de costura. Los pedidos se cierran por WhatsApp.

## Stack
- HTML5 semántico (lang="es-AR")
- CSS puro, sin framework (5 archivos en `/css/`)
- Alpine.js v3 (CDN, defer) para reactividad
- Sin build step, funciona como `file://` en browser

## Historial de desarrollo

### Sesión 1 — Creación inicial
Se creó el `index.html` monolítico (~820 líneas) con:
- Navbar fija con búsqueda + carrito
- Hero con textura puntillada
- Sección producto destacado del mes
- Grid de categorías (7 categorías)
- Grid de "Por qué elegirnos" (4 cards)
- Grid de productos con filtros por categoría y búsqueda
- Formulario de contacto con validación
- Footer con horarios, contacto y redes
- Drawer lateral del carrito
- Función WhatsApp para enviar pedido

### Sesión 2 — Refactor completo (2026-03-16)
Se ejecutó el plan de refactor completo:

**Separación de archivos:**
- CSS → 5 archivos en `css/`
- JS → 3 archivos en `js/` (`data.js`, `utils.js`, `store.js`)
- HTML → `index.html` limpio (solo shell semántico)

**SVGs de productos:**
- 15 SVGs ilustrativos en `imagenes/productos/`
- Reemplazan las imágenes picsum del catálogo
- Paleta terracota/crema/dorado por categoría

**SEO mejorado:**
- OG + Twitter Card completos
- JSON-LD LocalBusiness
- lang="es-AR", canonical, robots, theme-color
- Geolocalización AR-C/Buenos Aires

**Copy corregido:**
- Hero eyebrow: "Tu mercería de confianza" (eliminado "artesanal")

**Feature nueva — ID de pedido:**
- `generarNroPedido()` en `utils.js` genera un ID basado en timestamp: formato `PED-YYYYMMDD-XXXX`
- Único por definición (timestamp + 4 chars random), sin backend ni localStorage
- Se incluye en el mensaje de WhatsApp: "Pedido PED-20260316-A3F7"
- Descartado: contador localStorage (no global — cada browser tenía su propio contador)

### Sesión 3 — Features adicionales (2026-03-16)

**Selector de cantidad en cards de productos:**
- Botones −/+ + input numérico en cada product card (`.product-qty-row`)
- Estado en `store.js`: `cantidades{}` (mapa por id) + `getCantidad(id)` / `setCantidad(id, val)`
- El botón "Agregar" toma la cantidad seleccionada, no siempre 1
- Input sin flechas nativas del browser (CSS `appearance: none`)

**Selector de cantidad en el destacado:**
- Estado `cantidadDestacado` (número, default 1)
- Misma lógica −/+ encima del botón "Agregar al carrito"

**Logo reemplazado:**
- Antes: `<img src="imagenes/logo.png">` (archivo externo)
- Ahora: SVG inline de gatito negro + texto "Chloe Mercería" en Playfair Display
- El gato es un SVG inline con cara: orejas, ojos con pupilas, boca curva
- "Mercería" en color acento dorado (`var(--accent)`)
- No depende de ningún archivo de imagen

### Sesión 4 — Navbar, logo y carrusel (2026-03-16)

**Logo:**
- Reemplazado SVG inline por `<img src="imagenes/logo.png">` (archivo externo)
- Tamaño: 54px de alto en navbar

**Carrusel de destacados:**
- `DESTACADO` (objeto único) → `DESTACADOS` (array de 3 productos)
- Productos: Lana Merino Premium / Agujas crochet set x10 / Tela algodón estampada
- IDs negativos (-1, -2, -3) para no colisionar con PRODUCTOS
- Estado: `slidActivo` (índice activo), `cantidadesDestacado{}`, `addedDestacados{}`
- Métodos: `prevSlide()`, `nextSlide()`, `getCantDestacado(id)`, `setCantDestacado(id, val)`
- UI: flechas ← → a los lados + dots debajo

**Menú hamburguesa:**
- Botón a la IZQUIERDA del logo (en `.navbar-left` junto al logo)
- Sidebar izquierdo que desliza desde la izquierda (como el drawer del carrito pero al revés)
- Muestra las mismas categorías que "Nuestros productos" + "Todos los productos"
- Cierra al seleccionar categoría (`activarFiltro` incluye `this.menuOpen = false`)
- El overlay existente también cubre el menu (`carritoOpen || menuOpen`)
- Estado: `menuOpen: false` en store.js
- z-index: `1150` (por encima del overlay `1100`, por debajo del drawer carrito `1200`)

## Archivos clave

| Archivo | Qué contiene |
|---------|-------------|
| `js/data.js` | **ZONA DE EDICIÓN** — DESTACADOS (array 3), CATEGORIAS, PRODUCTOS con rutas SVG |
| `js/utils.js` | formatPrecio, iconoCat, generarNroPedido |
| `js/store.js` | tienda() — el Alpine component completo |
| `css/variables.css` | :root con custom properties |
| `css/layout.css` | Navbar, hero, footer, nav-menu (sidebar) |
| `css/components.css` | El archivo más grande — cards, botones, drawer, form, carrusel |

## Datos de contacto (en el código)
- WhatsApp: +5491132607001
- Email: chloemerceria@gmail.com
- Dirección: Av. Corrientes 1234, Buenos Aires

## Para agregar un producto
Editar `js/data.js`, agregar un objeto al array `PRODUCTOS`:
```js
{ id: 15, nombre: "...", descripcion: "...", precio: 1000, categoria: "Lanas", imagen: "imagenes/productos/mi-producto.svg" }
```
Y crear el SVG correspondiente en `imagenes/productos/`.

## Para cambiar los destacados del mes
Editar el array `DESTACADOS` en `js/data.js` (hasta 3 objetos con id negativo, nombre, descripcion, precio, categoria, imagen).

## Pendiente / posibles mejoras
- **[PRIORIDAD]** Desarrollar backend y completar con productos reales
- **[PENDIENTE]** Opción A — precios desde Google Sheets publicado como CSV: fetch al cargar → sobreescribe PRODUCTOS. Sin backend, cambios en la Sheet se reflejan automáticamente. Ya se usa Google Sheets en bot_chloe.
- Crear imagen OG real (1200×630) en `imagenes/og-cover.jpg`
- Actualizar URL en metas OG/canonical con dominio real cuando esté hosteado
- Instagram/Facebook links reales en el footer
- Considerar subir a GitHub Pages o Netlify para hosting estático
