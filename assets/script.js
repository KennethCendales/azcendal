// Azcendal — activa el efecto "liquid glass" del header al hacer scroll
const header = document.getElementById('siteHeader');

const actualizarHeader = () => {
  header.classList.toggle('esta-desplazado', window.scrollY > 8);
};

actualizarHeader();
window.addEventListener('scroll', actualizarHeader, { passive: true });
