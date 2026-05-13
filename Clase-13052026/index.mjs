import express from 'express'
import * as controlador from './modulos/productos/controladores.productos.mjs'
import { obtenerUno } from './modulos/productos/modelo.productos.mjs'

const PUERTO = 3030
const app = express()

app.get('/api/v1/productos', controlador.obtenerTodos)

app.get('/api/v1/productos/:id',obtenerUno)



app.listen(PUERTO)