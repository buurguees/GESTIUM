import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './firebaseConfig.js';

// Selección del formulario usando el ID correcto
const signupForm = document.querySelector('#register');

if (signupForm) {
  // Evento submit para el formulario
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Captura de valores de los campos de entrada
    const name = document.querySelector('#name').value;
    const lastname = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Mostrar los valores en la consola
    console.log('Nombre:', name);
    console.log('Apellido:', lastname);
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);

    try {
      // Registro en Firebase Authentication
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Usuario registrado correctamente:', userCredentials.user);

      // Redirigir o mostrar un mensaje de éxito
      alert(`¡Registro exitoso! Bienvenido, ${name} ${lastname}`);
    } catch (error) {
      console.error('Error al registrar el usuario:', error.message);
      alert(`Error: ${error.message}`);
    }
  });
} else {
  console.error("El formulario con ID 'register' no fue encontrado.");
}
