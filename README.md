# Sueños Valenti – Portal de Sesiones de Supra Conciencia

Proyecto desarrollado como parte de mi formación en **Desarrollo de Aplicaciones Web**, enfocado en el **backend con Node.js y Express**, utilizando **EJS** para el renderizado de vistas en servidor.

El objetivo del proyecto es crear una primera versión funcional de un portal web donde los usuarios puedan registrarse, iniciar sesión y gestionar sesiones grupales de conexión con la supra conciencia.

---

## 🧠 Descripción del proyecto

La aplicación permite:

- Ver información básica sobre la web Sueños Valenti.
- Registrarse mediante un formulario con validaciones.
- Iniciar sesión y acceder a una zona privada.
- Gestionar un carrito de sesiones almacenado en sesión.
- Cambiar entre tema claro y oscuro mediante cookies.
- Registrar accesos de usuarios en un archivo de logs.
- Guardar usuarios en un fichero JSON como sistema de persistencia.

Es un proyecto pensado para **practicar lógica de servidor, manejo de sesiones y cookies**, sin utilizar base de datos.

---

## ⚙️ Tecnologías utilizadas

- Node.js
- Express
- EJS (motor de plantillas)
- express-session
- cookie-parser
- File System (fs)
- HTML y CSS básico

---

## 📁 Estructura del proyecto

/data
└─ usuarios.json
/logs
└─ accesos.log
/public
└─ css
└─ styles.css
/views
└─ index.ejs
└─ registro.ejs
└─ login.ejs
└─ perfil.ejs
└─ sesiones.ejs
└─ preferencias.ejs
app.js
package.json


---

## 🔐 Funcionalidades principales

### Registro de usuarios
- Validación de campos (nombre, email, edad).
- Guardado de usuarios en un fichero JSON.

### Login y sesiones
- Inicio de sesión mediante email.
- Creación de sesión con los datos del usuario.
- Acceso protegido a la zona privada `/perfil`.

### Carrito en sesión
- Añadir sesiones al carrito.
- Vaciar el carrito.
- El carrito se gestiona completamente en sesión.

### Preferencias visuales
- Cambio entre tema claro y oscuro.
- Preferencia almacenada en cookie.
- Aplicación del tema en todas las vistas.

### Logs
- Registro de accesos de usuarios en un archivo de texto usando `fs.appendFile`.

---

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio.
2. Instalar dependencias:
npm install

3. Ejecutar el servidor:
npm run dev

4. Abrir en el navegador:
http://localhost:3000


---

## 🎯 Objetivo del proyecto

Este proyecto tiene un enfoque **formativo**, con el objetivo de consolidar conceptos de backend como:

- Rutas GET y POST
- Gestión de sesiones
- Uso de cookies
- Persistencia de datos sin base de datos
- Renderizado del lado del servidor

---

## 👩‍💻 Autora: 

Proyecto realizado por Benita Plata, estudiante de **Desarrollo de Aplicaciones Web**, como parte del aprendizaje en desarrollo backend con Node.js.
