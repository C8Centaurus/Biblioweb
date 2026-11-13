const Auth = (function () {
  const ADMIN = { correo: "admin@biblioweb.test", clave: "Admin123" };
  const CLAVE_SESION = "biblioweb-sesion";

  const haySesion = () => sessionStorage.getItem(CLAVE_SESION) === "activa";

  function protegerPagina() {
    if (!haySesion()) window.location.replace("login.html");
  }

  function cerrarSesion() {
    sessionStorage.removeItem(CLAVE_SESION);
    window.location.href = "index.html";
  }

  function iniciarLogin() {
    const form = document.getElementById("form-login");
    if (!form) return;                                   // no estamos en login.html
    if (haySesion()) { window.location.replace("admin.html"); return; }

    const correo = document.getElementById("correo");
    const clave = document.getElementById("clave");
    const error = document.getElementById("mensaje-error");

    const mostrarError = (texto) => { error.textContent = texto; error.classList.remove("d-none"); };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      error.classList.add("d-none");

      const c = correo.value.trim();
      const p = clave.value;

      if (c === "" || p === "") {                        // campos vacíos
        mostrarError("Completa el correo y la contraseña.");
        (c === "" ? correo : clave).focus();
        return;
      }
      if (c === ADMIN.correo && p === ADMIN.clave) {     // credenciales correctas
        sessionStorage.setItem(CLAVE_SESION, "activa");
        window.location.href = "admin.html";
      } else {                                           // credenciales incorrectas
        mostrarError("Correo o contraseña incorrectos");
        clave.value = "";
        clave.focus();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    iniciarLogin();
    const salir = document.getElementById("btn-logout");  // botón en admin.html
    if (salir) salir.addEventListener("click", cerrarSesion);
  });

  return { protegerPagina, cerrarSesion, haySesion };
})();