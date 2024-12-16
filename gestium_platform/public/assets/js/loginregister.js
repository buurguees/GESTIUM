import './app.js';

// Selección del formulario usando el ID correcto
const signupForm = document.querySelector('#register');

// Evento submit para el formulario
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue

  // Captura de valores de los campos de entrada
  const name = document.querySelector('#username').value;
  const lastname = document.querySelector('#userlastname').value;
  const email = document.querySelector('#useremail').value;
  const password = document.querySelector('#userpassword').value;

  // Mostrar los valores en la consola
  console.log('Nombre:', name);
  console.log('Apellido:', lastname);
  console.log('Correo Electrónico:', email);
  console.log('Contraseña:', password);
});
