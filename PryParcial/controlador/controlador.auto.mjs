import fs from 'fs'
import { pool } from '../BD/conexion.bd.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// Esta función lee el archivo y lo convierte en algo que JS entienda
const leerAutos = () => {
    const datosCargados = fs.readFileSync('./datos/datos.json', 'utf-8'); // Lee el archivo como texto
    return JSON.parse(datosCargados); // Lo convierte en un array de objetos
};

export function obtenerAutos(req, res) {
    try {
        const autos = leerAutos();
        res.status(200).json(autos);
    } catch (error) {
        res.status(404).json("Error al leer el archivo");
    }
};

// Función para obtener un solo auto por su ID
export const obtenerPorId = (req, res) => {
    try {
        //le damos un nombre a la funcion
        const autos = leerAutos();

        //convertimos el id a numero
        const idBuscado = parseInt(req.params.id);

        // Creamos la constante para que pueda buscar por id
        const auto = autos.find(a => a.id === idBuscado);

        if (auto) {
            res.status(200).json(auto);
        } else {
            res.status(404).json({ mensaje: "Auto No Encontrado" });
        }
    } catch (error) {

        res.status(500).json("Error Al Buscar El Auto");
    }
};

export const buscarNuevitos = (req, res) => {
    const autos = leerAutos();

    // Filtramos autos casi nuevos
    const nuevitos = autos.filter(a => a.km < 20000 && a.anio >= 2021);

    res.status(200).json({
        proceso: "Busqueda De Autos Semi-Nuevos",
        cantidad_encontrada: nuevitos.length,
        items: nuevitos
    });
};

export const autenticarUsuario = async (req, res) => {
  const { usuario, pass } = req.body;

  try {
    // Buscar usuario
    const resultado = await pool.query(
      "SELECT * FROM usuarios WHERE username = $1",
      [usuario]
    );

    if (resultado.rows.length === 0) {
      return res.status(401).send("Usuario no encontrado");
    }

    const userDB = resultado.rows[0];

    // Comparar contraseña con hash almacenado
    const esValida = await bcrypt.compare(
      pass.trim(),
      userDB.password_hash
    );

    if (!esValida) {
      return res.status(401).send("Contraseña incorrecta");
    }

    // Generar JWT
    const token = jwt.sign(
      {
        id: userDB.id,
        usuario: userDB.username,
      },
      process.env.FIRMA_JWT,
      { expiresIn: "1h" }
    );

    // Guardar cookie
    res.cookie("token_parcial", token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hora
    });

    return res.redirect("/autos");

  } catch (error) {
    console.error("Error en login:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

