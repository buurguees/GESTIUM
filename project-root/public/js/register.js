document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();

    if (response.ok) {
        alert("Usuario registrado con éxito.");
        window.location.href = "/public/html/login.html";
    } else {
        alert(`Error: ${result.message}`);
    }
});
