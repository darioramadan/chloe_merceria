/* ===== ZONA DE EDICIÓN — modificá acá sin tocar el resto del código ===== */

// Producto destacado del mes
const DESTACADO = {
  id: 0,
  nombre: "Lana Merino Premium 100g",
  descripcion: "Ideal para tejido fino. Suave, lavable, disponible en 20 colores.",
  precio: 3500,
  categoria: "Lanas",
  imagen: "imagenes/productos/lana-merino-destacado.svg"
};

// Categorías (orden en que aparecen en filtros y grilla de categorías)
const CATEGORIAS = ["Lanas", "Hilos", "Agujas", "Cintas", "Botones", "Telas", "Accesorios"];

// Catálogo de productos
const PRODUCTOS = [
  { id: 1,  nombre: "Lana acrílica 50g",           descripcion: "Suave y resistente, ideal para principiantes.",        precio: 1200, categoria: "Lanas",      imagen: "imagenes/productos/lana-acrilica.svg" },
  { id: 2,  nombre: "Lana merino 100g",             descripcion: "Premium, lavable a máquina.",                          precio: 3500, categoria: "Lanas",      imagen: "imagenes/productos/lana-merino.svg" },
  { id: 3,  nombre: "Hilo de bordar 8m",            descripcion: "6 hebras separables, 50 colores disponibles.",         precio: 350,  categoria: "Hilos",      imagen: "imagenes/productos/hilo-bordar.svg" },
  { id: 4,  nombre: "Hilo de coser bobina",         descripcion: "100% poliéster, alta resistencia.",                   precio: 280,  categoria: "Hilos",      imagen: "imagenes/productos/hilo-coser.svg" },
  { id: 5,  nombre: "Agujas crochet set x10",       descripcion: "Aluminio, ergonómicas, tallas 2mm–8mm.",              precio: 1800, categoria: "Agujas",     imagen: "imagenes/productos/agujas-crochet.svg" },
  { id: 6,  nombre: "Agujas de tejer bambú par",    descripcion: "Livianas y suaves, talla 4mm.",                       precio: 950,  categoria: "Agujas",     imagen: "imagenes/productos/agujas-bambu.svg" },
  { id: 7,  nombre: "Cinta de raso 2cm x 5m",      descripcion: "Perfecta para lazos y decoración.",                   precio: 600,  categoria: "Cintas",     imagen: "imagenes/productos/cinta-raso.svg" },
  { id: 8,  nombre: "Cinta de grosgrain 3cm",       descripcion: "Textura estriada, ideal para costura.",               precio: 480,  categoria: "Cintas",     imagen: "imagenes/productos/cinta-grosgrain.svg" },
  { id: 9,  nombre: "Botones nácar x20",            descripcion: "4 agujeros, 15mm, color natural.",                   precio: 700,  categoria: "Botones",    imagen: "imagenes/productos/botones-nacar.svg" },
  { id: 10, nombre: "Botones dorados forrados x10", descripcion: "Estilo vintage, 20mm.",                               precio: 850,  categoria: "Botones",    imagen: "imagenes/productos/botones-dorados.svg" },
  { id: 11, nombre: "Tela algodón estampada 1m",    descripcion: "Estampado floral, 1.40m de ancho.",                  precio: 2200, categoria: "Telas",      imagen: "imagenes/productos/tela-algodon.svg" },
  { id: 12, nombre: "Tela lino natural 1m",         descripcion: "100% lino, textura rústica elegante.",               precio: 3100, categoria: "Telas",      imagen: "imagenes/productos/tela-lino.svg" },
  { id: 13, nombre: "Dedal de metal ajustable",     descripcion: "Protege el dedo, talla universal.",                  precio: 400,  categoria: "Accesorios", imagen: "imagenes/productos/dedal.svg" },
  { id: 14, nombre: "Centímetro retráctil",         descripcion: "150cm, doble escala cm/pulgadas.",                   precio: 550,  categoria: "Accesorios", imagen: "imagenes/productos/centimetro.svg" },
];

/* ===== FIN ZONA DE EDICIÓN ===== */
