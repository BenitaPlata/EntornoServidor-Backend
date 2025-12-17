// Importo Express para crear el servidor
const express = require("express");

// Importo path para trabajar con rutas de carpetas
const path = require("path");

// Importo express-session para manejar sesiones
const session = require("express-session");

// Importo cookie-parser para poder usar cookies
const cookieParser = require("cookie-parser");

// Importo fs para trabajar con ficheros (usuarios y logs)
const fs = require("fs");

// Creo la aplicación Express
const app = express();

// Defino el puerto
const PORT = 3000;

// Le digo a Express que voy a usar EJS
app.set("view engine", "ejs");

// Indico dónde están las vistas
app.set("views", path.join(__dirname, "views"));

// Middleware para leer datos de formularios POST
app.use(express.urlencoded({ extended: true }));

// Middleware para usar cookies
app.use(cookieParser());

// Middleware para sesiones
app.use(
  session({
    secret: "suenos_valenti",
    resave: false,
    saveUninitialized: false, //evito crear sesiones vacías
  })
);

// Archivos estáticos (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Página de inicio
app.get("/", (req, res) => {
  // Leo el tema guardado en la cookie (si existe)
  const tema = req.cookies.tema || "claro";

  res.render("index", {
    titulo: "Sueños Valenti",
    descripcion: "Sesiones grupales para conectar con tu supra conciencia",
    tema: tema,
    usuario: req.session.usuario,
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////
// Ruta GET para mostrar el formulario de registro
app.get("/registro", (req, res) => {
  // Leo el tema guardado en la cookie (si no existe, uso "claro")
  const tema = req.cookies.tema || "claro";

  // Muestro la vista de registro pasando errores, datos y el tema
  res.render("registro", {
    errores: [], // Array para mostrar errores de validación
    datos: {}, // Objeto para rellenar el formulario si hay errores
    tema: tema, // Tema visual (claro u oscuro)
  });
});

// Ruta POST para procesar el registro
app.post("/registro", (req, res) => {
  // Obtengo los datos enviados desde el formulario
  const { nombre, email, edad, ciudad, intereses } = req.body;

  let errores = [];

  // Validaciones básicas
  if (!nombre || nombre.trim() === "") {
    errores.push("El nombre es obligatorio");
  }

  if (!email || !email.includes("@")) {
    errores.push("El email no es válido");
  }

  if (!edad || edad <= 0) {
    errores.push("La edad debe ser mayor que 0");
  }

  // Si hay errores, vuelvo a mostrar el formulario
  if (errores.length > 0) {
    const tema = req.cookies.tema || "claro";

    return res.render("registro", {
      errores: errores,
      datos: req.body,
      tema: tema,
    });
  }

  // Creo el objeto usuario
  const nuevoUsuario = {
    nombre,
    email,
    edad,
    ciudad,
    intereses,
  };

  // Ruta del fichero JSON
  const rutaUsuarios = path.join(__dirname, "data", "usuarios.json");

  // Leo los usuarios actuales
  let usuarios = [];
  if (fs.existsSync(rutaUsuarios)) {
    const datos = fs.readFileSync(rutaUsuarios, "utf-8");
    usuarios = JSON.parse(datos);
  }

  // Añado el nuevo usuario
  usuarios.push(nuevoUsuario);

  // Guardo el fichero actualizado
  fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2));

  // Redirijo al login
  res.redirect("/login");
});

/////////////////////////////////////////////////////////////////////////////////////////////

// Ruta GET para mostrar el formulario de login
app.get("/login", (req, res) => {
  const tema = req.cookies.tema || "claro";
  // Muestro la vista de registro pasando errores y el tema
  res.render("login", {
    error: "",
    tema: tema,
  });
});


// Ruta POST para procesar el login (no valida contraseña, solo comprueba si el usuario existe)

app.post("/login", (req, res) => {
  const { email } = req.body;

  const rutaUsuarios = path.join(__dirname, "data", "usuarios.json");
  let usuarios = [];

  if (fs.existsSync(rutaUsuarios)) {
    const datos = fs.readFileSync(rutaUsuarios, "utf-8");
    usuarios = JSON.parse(datos);
  }

  // Busco el usuario por email
  const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email);

  // Si no existe, vuelvo al login
  if (!usuarioEncontrado) {
    const tema = req.cookies.tema || "claro";

    return res.render("login", {
      error: "Usuario no encontrado",
      tema: tema,
    });
  }

  // Creo la sesión del usuario
  req.session.usuario = usuarioEncontrado;

  // Inicializo el carrito espiritual
  req.session.carrito = [];

  // Registro el acceso en el fichero de logs
  const rutaLog = path.join(__dirname, "logs", "accesos.log");
  const fecha = new Date().toLocaleString();
  const mensaje = `[${fecha}] Acceso de ${usuarioEncontrado.email}\n`;

  fs.appendFile(rutaLog, mensaje, (err) => {
    if (err) {
      console.log("Error al escribir en el log");
    }
  });

  // Redirijo al perfil
  res.redirect("/perfil");
});

//////////////////////////////////////////////////////////////////////////////////////////////////
// Ruta GET para la zona privada del perfil
app.get("/perfil", (req, res) => {
  // Si no hay sesión, no dejo entrar
  if (!req.session.usuario) {
    return res.redirect("/login");
  }

  const tema = req.cookies.tema || "claro";

  // Muestro el perfil con los datos del usuario
  res.render("perfil", {
    usuario: req.session.usuario,
    tema: tema,
  });
});

// Ruta POST para cerrar sesión
app.post("/logout", (req, res) => {
  // Elimino la sesión del usuario
  req.session.destroy(() => {
    res.redirect("/");
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// Ruta GET para cambiar preferencias de tema . La cookie guarda el tema y se aplica en todas las vistas.
app.get("/preferencias", (req, res) => {
  const tema = req.cookies.tema || "claro";

  res.render("preferencias", {
    tema: tema,
  });
});

// Guardo el tema claro
app.get("/preferencias/claro", (req, res) => {
  res.cookie("tema", "claro");
  res.redirect("/");
});

// Guardo el tema oscuro
app.get("/preferencias/oscuro", (req, res) => {
  res.cookie("tema", "oscuro");
  res.redirect("/");
});

///////////////////////////////////////////////////////////////////////////////////////////////////
// Ruta GET para mostrar sesiones disponibles
app.get("/sesiones", (req, res) => {
  const tema = req.cookies.tema || "claro";

  const sesiones = [
    "Sesión de meditación guiada",
    "Conexión energética grupal",
    "Viaje de introspección consciente"
  ];

  res.render("sesiones", {
    sesiones,
    carrito: req.session.carrito,
    tema
  });
});


// Añadir una sesión al carrito
app.get("/carrito/agregar/:sesion", (req, res) => {
  if (!req.session.carrito) {
    req.session.carrito = [];
  }

  req.session.carrito.push(req.params.sesion);
  res.redirect("/sesiones");
});

// Vaciar el carrito
app.get("/carrito/vaciar", (req, res) => {
  req.session.carrito = [];
  res.redirect("/sesiones");
});
/////////////////////////////////////////////////////////////////////////////////////////////////// 

// Arranco el servidor
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
