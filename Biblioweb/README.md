# BiblioWeb — catálogo y administración de una biblioteca

Prototipo estático (HTML, CSS, Bootstrap 5.3 y JavaScript). Abrir `index.html` en el navegador.

## Estructura

```
Biblioweb/
├── index.html      Integrante 2 · Inicio / landing
├── catalogo.html   Integrante 3 · Catálogo + modal de solicitud   (PENDIENTE)
├── login.html      Integrante 1 · Acceso de administrador
├── admin.html      Integrante 4 · Panel de administración
├── css/
│   ├── base.css      Integrante 1 · variables de color, foco, login
│   └── estilos.css   Integrante 2 · navbar, footer y color primario compartidos
└── js/
    ├── auth.js       Integrante 1 · login, sesión y cierre de sesión
    └── tema.js       Integrante 1 · tema claro/oscuro
```

## Reglas para que todo conecte

- Todas las páginas cargan, en este orden: Bootstrap → `css/base.css` → `css/estilos.css` → `js/tema.js` (en el `<head>`).
- Botón de tema: `id="btn-tema"`. Botón de cerrar sesión: `id="btn-logout"`. Formulario de login: `id="form-login"`.
- `admin.html` protege la ruta con `Auth.protegerPagina()` en el `<head>`.
- Para colores usar clases que se adapten al tema (`bg-body`, `bg-body-tertiary`, `text-body`, `text-body-secondary`). Evitar `bg-white`, `bg-light` y `text-dark`: se rompen en modo oscuro.
- `catalogo.html` debe copiar el mismo `<head>`, `<nav>` y `<footer>` de `index.html` (cambiando solo el enlace `active`). Las tarjetas pueden usar la clase `card-libro`.

## Cuenta de prueba

- Correo: `admin@biblioweb.test`
- Contraseña: `Admin123`
