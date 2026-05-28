import express from 'express'
import './iniciar.env.mjs'
import rutaProductos from './modulos/productos/rutas.productos.mjs';


//console.log(process.env);

const PUERTO = process.env.PUERTO || 3030
const app = express()

app.use(rutaProductos)

app.listen(PUERTO)