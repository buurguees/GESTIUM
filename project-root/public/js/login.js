document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    console.log("Iniciando sesión con:", { email, password });
    alert("Inicio de sesión exitoso (Simulado).");
  });
});
