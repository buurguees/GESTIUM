// Funcionalidad para redirigir a las páginas correspondientes
document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login-btn");
    const registerButton = document.getElementById("register-btn");
  
    loginButton.addEventListener("click", () => {
      window.location.href = "login_register.html#login";
    });
  
    registerButton.addEventListener("click", () => {
      window.location.href = "login_register.html#register";
    });
  });
  