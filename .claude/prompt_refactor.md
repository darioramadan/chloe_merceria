# Prompt — Refactor Landing Chloe Mercería

## Tarea ejecutada
Refactor completo del `index.html` monolítico (~820 líneas) de la landing de Chloe Mercería.

## Pedido original
1. Separar HTML, CSS y JS en carpetas/archivos por lenguaje
2. Reemplazar imágenes picsum por SVGs propios ilustrativos de productos
3. Mejorar el SEO (OG completo, Twitter Cards, JSON-LD, canonical, theme-color)
4. Usar logo real desde `imagenes/logo.png` en la navbar
5. Eliminar referencias a "artesanal" en el copy
6. Asignar un ID de pedido al finalizar por WhatsApp (inspirado en bot_chloe que usa SQLite + `next_order_number`)

## Estructura resultante
```
Pagina-Chloe/
├── index.html                    ← shell limpio: solo HTML semántico + links
├── imagenes/
│   ├── logo.png                  ← logo real (preexistente)
│   └── productos/                ← 15 SVGs ilustrativos
│       ├── lana-acrilica.svg
│       ├── lana-merino.svg
│       ├── lana-merino-destacado.svg   ← 800×500, para el hero del destacado
│       ├── hilo-bordar.svg
│       ├── hilo-coser.svg
│       ├── agujas-crochet.svg
│       ├── agujas-bambu.svg
│       ├── cinta-raso.svg
│       ├── cinta-grosgrain.svg
│       ├── botones-nacar.svg
│       ├── botones-dorados.svg
│       ├── tela-algodon.svg
│       ├── tela-lino.svg
│       ├── dedal.svg
│       └── centimetro.svg
├── css/
│   ├── variables.css             ← custom properties (:root)
│   ├── base.css                  ← reset, body, tipografía, container, section
│   ├── layout.css                ← navbar, hero, footer
│   ├── components.css            ← cards, buttons, drawer, form, pills, productos
│   └── animations.css           ← [x-cloak]
├── js/
│   ├── data.js                   ← ZONA DE EDICIÓN: DESTACADO, CATEGORIAS, PRODUCTOS
│   ├── utils.js                  ← formatPrecio(), iconoCat(), generarNroPedido()
│   └── store.js                  ← tienda() — Alpine component global
└── .claude/
    ├── prompt_refactor.md        ← este archivo
    └── contexto.md               ← historial del proyecto
```

## Decisiones técnicas clave

### Carga de Alpine sin build step
```html
<script defer src="js/data.js"></script>
<script defer src="js/utils.js"></script>
<script defer src="js/store.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
```
Con `defer`, los 4 scripts ejecutan en orden post-DOM. Alpine llega último y encuentra `window.tienda` ya definido.

### ID de pedido (localStorage)
En `js/utils.js`, `generarNroPedido()` guarda un contador en `localStorage` bajo la key `chloe_next_order` (arranca en 1001). El mensaje de WhatsApp incluye `Pedido N° XXXX`. Inspirado en el bot_chloe que usa `config.next_order_number` en SQLite.

### SEO agregado
- OG completo (title, description, url, type, image con dimensiones)
- Twitter Card summary_large_image
- `<link rel="canonical">`
- `lang="es-AR"` en `<html>`
- `meta name="robots"`, `theme-color`, `author`
- Geolocalización: `geo.region=AR-C`, `geo.placename=Buenos Aires`
- JSON-LD `LocalBusiness` con teléfono, dirección, horarios, priceRange

### SVGs de productos
- viewBox `400×300` para los 14 productos de catálogo
- viewBox `800×500` para `lana-merino-destacado.svg` (hero del destacado)
- Paleta por categoría: Lanas #F2E4D8/#C9785C, Hilos #FDF4E3/#D4A853, Agujas #E8EDF2/#7B9BAF, Cintas #F5E8EF/#C97C96, Botones #EDE8E0/#8B6F5E, Telas #E8EFE4/#7B9B6F, Accesorios #EDE8E0/#A08060
