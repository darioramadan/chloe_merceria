# Prompt — Landing Page "Chloe Mercería"

Generá una landing page completa para una mercería llamada **"Chloe Mercería"**, con estética moderna, cálida y profesional. Debe estar optimizada para mobile y desktop.

---

## Stack técnico

- **Un único archivo `index.html`** autocontenido, listo para abrir en el browser sin instalación
- **Alpine.js** desde CDN (`https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js`) para reactividad del carrito y filtros — sin build step
- No usar React ni frameworks que requieran compilación

---

## Paleta de colores (fija, no cambiar)

| Rol | Color |
|---|---|
| Primario | Terracota `#C9785C` |
| Fondo principal | Crema `#FAF7F2` |
| Fondo secciones alt | Crema oscuro `#F5EFE6` |
| Acento | Dorado `#D4A853` |
| Texto | Carbón `#2C2C2C` |

Sin colores estridentes. Estética tipo tienda artesanal premium.

---

## Tipografía (fija, no cambiar)

- **Títulos**: Google Font `Playfair Display`
- **Cuerpo**: Google Font `Inter`
- Importar ambas desde CDN de Google Fonts

---

## SEO básico

En el `<head>` incluir:
- `<title>Chloe Mercería — Todo lo que tu costura necesita</title>`
- `<meta name="description" content="Lanas, hilos, agujas, telas y accesorios de mercería con envío rápido. Chloe Mercería.">`
- `<meta property="og:title" content="Chloe Mercería">`
- `<meta property="og:image" content="https://picsum.photos/seed/chloe-og/1200/630">`
- Favicon SVG inline (hilo o aguja, simple, en terracota)

---

## Datos editables — ZONA DE EDICIÓN

Colocar al inicio del `<script>` con Alpine.js, con el comentario `/* ===== ZONA DE EDICIÓN — modificá acá sin tocar el resto del código ===== */`:

```js
// Producto destacado del mes
const DESTACADO = {
  id: 0,
  nombre: "Lana Merino Premium 100g",
  descripcion: "Ideal para tejido fino. Suave, lavable, disponible en 20 colores.",
  precio: 3500,
  categoria: "Lanas",
  imagen: "https://picsum.photos/seed/destacado/800/500"
};

// Categorías (orden en que aparecen en filtros y grilla de categorías)
const CATEGORIAS = ["Lanas", "Hilos", "Agujas", "Cintas", "Botones", "Telas", "Accesorios"];

// Catálogo de productos
const PRODUCTOS = [
  { id: 1, nombre: "Lana acrílica 50g", descripcion: "Suave y resistente, ideal para principiantes.", precio: 1200, categoria: "Lanas", imagen: "https://picsum.photos/seed/lana1/400/300" },
  { id: 2, nombre: "Lana merino 100g", descripcion: "Premium, lavable a máquina.", precio: 3500, categoria: "Lanas", imagen: "https://picsum.photos/seed/lana2/400/300" },
  { id: 3, nombre: "Hilo de bordar 8m", descripcion: "6 hebras separables, 50 colores disponibles.", precio: 350, categoria: "Hilos", imagen: "https://picsum.photos/seed/hilo1/400/300" },
  { id: 4, nombre: "Hilo de coser bobina", descripcion: "100% poliéster, alta resistencia.", precio: 280, categoria: "Hilos", imagen: "https://picsum.photos/seed/hilo2/400/300" },
  { id: 5, nombre: "Agujas crochet set x10", descripcion: "Aluminio, ergonómicas, tallas 2mm–8mm.", precio: 1800, categoria: "Agujas", imagen: "https://picsum.photos/seed/aguja1/400/300" },
  { id: 6, nombre: "Agujas de tejer bambú par", descripcion: "Livianas y suaves, talla 4mm.", precio: 950, categoria: "Agujas", imagen: "https://picsum.photos/seed/aguja2/400/300" },
  { id: 7, nombre: "Cinta de raso 2cm x 5m", descripcion: "Perfecta para lazos y decoración.", precio: 600, categoria: "Cintas", imagen: "https://picsum.photos/seed/cinta1/400/300" },
  { id: 8, nombre: "Cinta de grosgrain 3cm", descripcion: "Textura estriada, ideal para costura.", precio: 480, categoria: "Cintas", imagen: "https://picsum.photos/seed/cinta2/400/300" },
  { id: 9, nombre: "Botones nácar x20", descripcion: "4 agujeros, 15mm, color natural.", precio: 700, categoria: "Botones", imagen: "https://picsum.photos/seed/boton1/400/300" },
  { id: 10, nombre: "Botones dorados forrados x10", descripcion: "Estilo vintage, 20mm.", precio: 850, categoria: "Botones", imagen: "https://picsum.photos/seed/boton2/400/300" },
  { id: 11, nombre: "Tela algodón estampada 1m", descripcion: "Estampado floral, 1.40m de ancho.", precio: 2200, categoria: "Telas", imagen: "https://picsum.photos/seed/tela1/400/300" },
  { id: 12, nombre: "Tela lino natural 1m", descripcion: "100% lino, textura rústica elegante.", precio: 3100, categoria: "Telas", imagen: "https://picsum.photos/seed/tela2/400/300" },
  { id: 13, nombre: "Dedal de metal ajustable", descripcion: "Protege el dedo, talla universal.", precio: 400, categoria: "Accesorios", imagen: "https://picsum.photos/seed/acc1/400/300" },
  { id: 14, nombre: "Centímetro retráctil", descripcion: "150cm, doble escala cm/pulgadas.", precio: 550, categoria: "Accesorios", imagen: "https://picsum.photos/seed/acc2/400/300" },
];
```

---

## Secciones requeridas (en este orden)

### 1. Navbar fija
- Logo/nombre "Chloe Mercería" en Playfair Display
- Ícono de búsqueda (lupa) que despliega un input inline
- Ícono de carrito con badge reactivo de cantidad (Alpine.js)
- En mobile: compacto, sin menú hamburguesa (la tienda no tiene páginas internas)

### 2. Hero
- Nombre de la tienda + tagline: *"Todo lo que tu costura necesita"*
- Fondo: gradiente cálido (crema → terracota suave) con textura sutil (SVG inline de puntos o líneas)
- Botón "Ver productos" con scroll suave a la sección de productos

### 3. Producto destacado del mes *(nuevo)*
- Sección de ancho completo con imagen grande a la izquierda y descripción + CTA a la derecha
- Consume el objeto `DESTACADO` del JSON
- Badge "⭐ Destacado del mes" en terracota
- Botón "Agregar al carrito" que usa la misma lógica del catálogo
- En mobile: imagen arriba, texto abajo

### 4. Categorías destacadas
- Grilla de cards (íconos + nombre), una por categoría del array `CATEGORIAS`
- Cada card al hacer clic activa ese filtro en la sección de productos con scroll suave
- Íconos SVG inline simples y representativos para cada categoría

### 5. ¿Por qué elegirnos?
- 3–4 puntos con ícono SVG inline: envíos rápidos, atención personalizada, productos de calidad, precios justos
- Fondo crema alternativo (`#F5EFE6`) para diferenciar visualmente

### 6. Sección de productos
- **Buscador** en tiempo real: filtra por nombre o descripción (Alpine.js `x-model`)
- **Filtros pills**: "Todos" + una pill por categoría del array `CATEGORIAS`; solo uno activo a la vez
- **Grilla** responsive: 4 cols desktop → 3 cols tablet → 2 cols mobile → 1 col mobile pequeño
- **Cards**: imagen, badge de categoría, nombre, descripción corta, precio formateado (`$1.200`), botón "Agregar al carrito"
- Feedback visual en el botón: cambia a "¡Agregado! ✓" por 1.5 segundos al hacer clic

### 7. Formulario de contacto *(nuevo)*
- Sección con fondo crema alternativo, antes del footer
- Título: "¿Tenés alguna consulta?" (Playfair Display)
- Campos: Nombre, Email, Mensaje (textarea)
- Botón enviar en terracota: al hacer clic abre un mailto con los datos precargados (`mailto:chloemerceria@gmail.com?subject=Consulta desde la web&body=...`)
- Validación mínima client-side con Alpine.js: campos requeridos, formato email
- Feedback visual: mensaje de confirmación inline ("¡Mensaje enviado! Te respondemos a la brevedad") después de hacer clic

### 8. Footer
- Nombre de la tienda + tagline breve
- Links: Instagram, Facebook, WhatsApp (número +5491132607001)
- Horario de atención de ejemplo
- Dirección de ejemplo
- Copyright

---

## Carrito (Alpine.js, panel lateral deslizante)

- **Drawer** deslizable desde la derecha, se abre con el ícono del navbar
- Lista de ítems: imagen miniatura, nombre, botones − y + de cantidad, precio unitario, subtotal, botón eliminar ×
- Total general al pie del drawer
- **Botón "Finalizar pedido por WhatsApp"**: genera mensaje y abre `https://wa.me/5491132607001?text=...`

Formato del mensaje (codificado con `encodeURIComponent`):

```
Hola! Quiero realizar este pedido 🛍️

[nombre del producto] x[cantidad] — $[subtotal]
[nombre del producto] x[cantidad] — $[subtotal]
...

*Total: $[total]*

Quedo a la espera, ¡muchas gracias!
```

- Si el carrito está vacío: mostrar mensaje vacío en el drawer y deshabilitar el botón
- Carrito en memoria (no localStorage)
- El badge del navbar se actualiza reactivamente con Alpine.js

---

## Requisitos técnicos

- 100% responsive, mobile-first
- Animaciones sutiles: hover en cards (elevación + sombra), transición del drawer (slide desde derecha)
- Sin backend, sin pagos, sin base de datos
- Código comentado por sección
- Todo en un único `index.html`, sin archivos externos (salvo CDN)
- Imágenes: `picsum.photos` con seed fija (ya definidas en el JSON)
- El código debe ser **fácil de iterar**: cuando el usuario reemplace imágenes reales, categorías o productos, solo toca la ZONA DE EDICIÓN — el resto del HTML/CSS/JS no cambia
