# Azcendal — Tienda de ropa deportiva

**Versión de prueba** de la página de inicio de Azcendal, una tienda
de ropa deportiva. Este repositorio contiene únicamente la pestaña
de **inicio (home)**, maquetada en HTML5 y CSS puro.

## Vista previa

La página muestra:

- Header con navegación **HOMBRE / MUJER** (con menús desplegables),
  logo centrado, selector de idioma y accesos a cuenta, búsqueda y
  carrito.
- Hero a pantalla completa dividido en dos, con las colecciones de
  hombre y mujer, separadas por una costura diagonal como elemento
  distintivo de marca.
- Diseño responsive (se adapta a celular y tablet).

## Cómo verla

1. Clona este repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/azcendal.git
   ```
2. Entra a la carpeta y abre `index.html` directamente en el
   navegador (doble clic), o usa la extensión **Live Server** de
   VS Code para verla con recarga automática.

También puedes publicarla con **GitHub Pages**:
1. Ve a *Settings → Pages* en el repositorio.
2. En *Branch*, elige `main` y la carpeta raíz (`/`).
3. Guarda y espera unos minutos: GitHub generará una URL pública
   (algo como `https://<tu-usuario>.github.io/azcendal/`).

## Estructura del proyecto

```
azcendal/
├── index.html          # Página de inicio
├── README.md            # Este documento
└── assets/
    ├── estilos.css        # Estilos (paleta, tipografía, layout)
    ├── nombre_marca.png    # Logo/wordmark de Azcendal
    ├── favicon.ico          # Ícono de la pestaña del navegador
    ├── hombre.png            # Imagen de la colección hombre
    └── mujer.png              # Imagen de la colección mujer
```

## Stack

HTML5 semántico + CSS3 (sin frameworks ni dependencias de build).
Tipografías cargadas desde Google Fonts (Oswald + Inter).

## Estado

🚧 Proyecto en fase de prueba — por ahora solo está programada la
pestaña de inicio. Las demás secciones (catálogo, producto, carrito,
checkout) están pendientes.
