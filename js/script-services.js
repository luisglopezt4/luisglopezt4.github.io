// Agregar funcionalidad para animaciones simples al cargar contenido
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
      }, index * 300); // Retraso para cada sección
    });
  });
  