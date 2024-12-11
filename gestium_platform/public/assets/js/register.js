// Importa las funciones necesarias de Firebase
import { auth, db } from "../js/firebaseConfig";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Manejo del formulario de registro
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validación de contraseñas
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    try {
        // Crear el usuario con Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Guardar información adicional en Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            createdAt: new Date().toISOString(),
        });

        alert("Registro exitoso. ¡Bienvenido a Gestium!");
        // Redirigir al dashboard
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Error en el registro:", error.message);
        alert(`Error en el registro: ${error.message}`);
    }
});

// Redirigir a login.html cuando se hace clic en "Iniciar sesión"
document.getElementById("loginLink").addEventListener("click", () => {
    window.location.href = "login.html";
});

// Redirigir a index.html cuando se hace clic en "Atrás"
document.getElementById("backButton").addEventListener("click", () => {
    window.location.href = "index.html";
});
