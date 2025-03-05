document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.querySelector('.overlay');

    overlay.addEventListener('click', function() {
        menuToggle.checked = false; // Desmarca el checkbox al hacer clic en el overlay
    });
});
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​