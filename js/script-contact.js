// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const responseDiv = document.getElementById('response');
  
    if (name && email && message) {
      responseDiv.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado con éxito.`;
      responseDiv.style.color = "green";
      this.reset();
    } else {
      responseDiv.textContent = "Por favor, completa todos los campos.";
      responseDiv.style.color = "red";
    }
  });
