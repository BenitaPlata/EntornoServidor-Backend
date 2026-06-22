# 🌙 Sueños V — Portal de Sesiones de Supra Conciencia

Aplicación web fullstack con renderizado en servidor desarrollada con Node.js, Express y EJS. Permite a los usuarios registrarse, iniciar sesión y gestionar sesiones grupales dentro de un portal temático.

El proyecto está enfocado en consolidar conceptos fundamentales de desarrollo backend como rutas, sesiones, cookies y persistencia de datos sin necesidad de utilizar una base de datos.

🌐 **Ver proyecto**

👉 URL del proyecto (si está desplegado)

---

# 🧠 Descripción

La aplicación permite:

* Consultar información sobre el portal Sueños V.
* Registrarse mediante formularios con validaciones.
* Iniciar sesión y acceder a una zona privada.
* Gestionar un carrito de sesiones almacenado en sesión.
* Alternar entre tema claro y oscuro mediante cookies.
* Registrar accesos de usuarios en archivos de log.
* Persistir usuarios en un fichero JSON.

> Proyecto orientado al aprendizaje de lógica de servidor, manejo de sesiones y cookies utilizando tecnologías backend tradicionales.

---

# ✨ Funcionalidades

## 👤 Registro de Usuarios

* Validación de nombre, email y edad.
* Almacenamiento persistente mediante archivos JSON.
* Prevención de registros inválidos.

## 🔐 Login y Sesiones

* Inicio de sesión mediante correo electrónico.
* Creación y mantenimiento de sesiones con `express-session`.
* Acceso protegido a zonas privadas.

## 🛒 Carrito de Sesiones

* Añadir sesiones al carrito.
* Vaciar carrito.
* Persistencia temporal mediante sesión de usuario.

## 🎨 Preferencias Visuales

* Cambio entre modo claro y oscuro.
* Preferencias almacenadas mediante cookies.
* Aplicación automática en todas las vistas.

## 📋 Logs de Acceso

* Registro de accesos en archivos de texto.
* Generación automática de historial mediante `fs.appendFile()`.

---

# 🛠 Stack Tecnológico

| Tecnología       | Uso                            |
| ---------------- | ------------------------------ |
| Node.js          | Runtime del servidor           |
| Express          | Framework HTTP y enrutado      |
| EJS              | Motor de plantillas SSR        |
| express-session  | Gestión de sesiones            |
| cookie-parser    | Lectura y escritura de cookies |
| File System (fs) | Persistencia y logs            |
| HTML5            | Estructura de vistas           |
| CSS3             | Estilos y presentación         |

---

# 🧱 Arquitectura

## Estructura del Proyecto

```text
/data
└── usuarios.json

/logs
└── accesos.log

/public
└── css/
    └── styles.css

/views
├── index.ejs
├── registro.ejs
├── login.ejs
├── perfil.ejs
├── sesiones.ejs
└── preferencias.ejs

app.js
package.json
```

## Organización de Responsabilidades

| Elemento | Función                         |
| -------- | ------------------------------- |
| Views    | Renderizado de páginas          |
| Public   | Recursos estáticos              |
| Data     | Persistencia de usuarios        |
| Logs     | Registro de actividad           |
| app.js   | Configuración principal y rutas |

---

# 🔐 Gestión de Sesiones y Cookies

## Sesiones

* Identificación de usuarios autenticados.
* Protección de rutas privadas.
* Gestión temporal de datos de usuario.
* Carrito almacenado en memoria de sesión.

## Cookies

* Persistencia de preferencias visuales.
* Aplicación automática del tema seleccionado.
* Lectura y escritura mediante `cookie-parser`.

---

# 🚀 Instalación Local

## Requisitos Previos

* Node.js 18 o superior.
* npm.

## 1. Clonar el repositorio

```bash
git clone https://github.com/BenitaPlata/suenos-v.git
cd suenos-v
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Ejecutar el servidor

```bash
npm run dev
```

Abrir en el navegador:

```text
http://localhost:3000
```

---

# 📂 Persistencia de Datos

El proyecto utiliza persistencia basada en archivos.

### Usuarios

```text
/data/usuarios.json
```

Los registros se almacenan utilizando el módulo nativo `fs`.

### Logs

```text
/logs/accesos.log
```

Cada acceso se registra automáticamente con fines de seguimiento y auditoría.

---

# 🧩 Qué Demuestra Este Proyecto

* Manejo de rutas GET y POST con Express.
* Implementación de autenticación basada en sesiones.
* Uso de cookies para personalización de la experiencia.
* Persistencia de datos sin base de datos utilizando JSON.
* Renderizado en servidor mediante EJS.
* Organización básica de una aplicación MVC.
* Separación entre vistas, lógica y almacenamiento.
* Comprensión de conceptos fundamentales del backend web.

---

# 👩‍💻 Autora

**Benita Plata**

🔗 [GitHub](https://github.com/BenitaPlata) •
🌐 [Portfolio](https://portfolio-benitaplata.vercel.app) •
💼 [LinkedIn](https://www.linkedin.com/in/benita-plata/)

---

# 📄 Licencia

MIT License
