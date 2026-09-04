# Azcendal — Tienda de ropa deportiva

**Versión de prueba** de la página de inicio de Azcendal, marca colombiana de indumentaria de performance urbano. Este repositorio contiene únicamente la pestaña de **inicio (home)**, maquetada en HTML5 y CSS puro.

## Vista previa

La página muestra:

- **Barra de navegación flotante** estilo "vidrio líquido" (glassmorphism): fija en la parte superior, translúcida con desenfoque de fondo, con enlaces a Hombre, Mujer, Colección y Sobre nosotros, y accesos a búsqueda, cuenta y carrito.
- **Hero a pantalla completa** con foto de marca, formas orgánicas translúcidas de fondo ("blobs") y un panel de vidrio con borde irregular que contiene el mensaje principal ("La disciplina te define") y el llamado a la acción.
- **Indicador de navegación decorativo** (puntos verticales) y texto de scroll ("Desliza para descubrir") como guía visual.
- **Tres tarjetas de categoría** (Entrena / Corre / Estilo de vida) con foto, overlay oscuro y flecha que se activa al pasar el mouse.
- Diseño responsive (se adapta a tablet y celular).

## Cambios de esta versión

- Rediseño completo del home: se reemplazó la paleta azul marino/azul eléctrico y el hero dividido hombre/mujer por una dirección visual monocroma (negro/blanco) con efecto de vidrio esmerilado (`backdrop-filter`), siguiendo una referencia visual específica proporcionada.
- La barra de navegación pasó de una barra completa con menús desplegables a una píldora flotante con vidrio.
- Se agregaron formas orgánicas de fondo (blobs) y un panel de vidrio con bordes irregulares como elemento distintivo de marca.
- Se añadió la sección de tres tarjetas de categoría (Entrena / Corre / Estilo de vida) como nuevo bloque bajo el hero.

## Pendientes conocidos

- Las imágenes `fuerza.jpg`, `correr.jpg` y `ejercicio.jpg` de las tarjetas de categoría deben agregarse a `assets/` (no forman parte de este commit).
- Los puntos de navegación del hero son decorativos; no controlan un carrusel real todavía.
- Los enlaces Hombre y Mujer ya no abren un submenú con categorías internas (Camisetas, Chaquetas, etc.) como en la versión anterior — pendiente de decidir si se reincorpora como mega-menú de vidrio.

## Cómo verla

1. Clona este repositorio:
   ```bash
   git clone https://github.com/KennethCendales/azcendal.git
   ```
2. Entra a la carpeta y abre `index.html` directamente en el navegador (doble clic), o usa la extensión **Live Server** de VS Code para verla con recarga automática.

También puedes publicarla con **GitHub Pages**:
1. Ve a *Settings → Pages* en el repositorio.
2. En *Branch*, elige `main` y la carpeta raíz (`/`).
3. Guarda y espera unos minutos: GitHub generará una URL pública (algo como `https://kennethcendales.github.io/azcendal/`).

## Estructura del proyecto

```
azcendal/
├── index.html            # Página de inicio
├── README.md             # Este documento
└── assets/
    ├── estilos.css         # Estilos (paleta, tipografía, layout, vidrio líquido)
    ├── script.js            # Interactividad (reservado para futuras mejoras)
    ├── nombre_marca.png      # Logo/wordmark de Azcendal
    ├── logo.ico               # Ícono de la pestaña del navegador
    ├── hombre.png              # Foto principal del hero
    ├── fuerza.jpg              # Tarjeta "Entrena" (pendiente de subir)
    ├── correr.jpg               # Tarjeta "Corre" (pendiente de subir)
    └── ejercicio.jpg             # Tarjeta "Estilo de vida" (pendiente de subir)
```

## Stack

HTML5 semántico + CSS3 (sin frameworks ni dependencias de build). Tipografías cargadas desde Google Fonts (Oswald + Inter).

## Estado

🚧 Proyecto en fase de prueba — por ahora solo está programada la pestaña de inicio. Las demás secciones (catálogo, producto, carrito, checkout) están pendientes.
