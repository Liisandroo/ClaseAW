import express from 'express'
import {obtenerProductos, obtenerProductosPorId, elimninarProducto, altaProducto, modificarProducto} from './funciones.mjs'


const PUERTO = 3030

const app = express()
app.use(express.json()) // --> avisa ra expres que voy a mandar datos del tipo json por el cuerpo

//configuracion de una API REST

//GET /api/v1/productos
app.get('/api/v1/productos', obtenerProductos)

//GET /api/v1/productos/:id
app.get('/api/v1/productos/:id',obtenerProductosPorId)

//POST /api/v1/productos ---> damos de alta un registro
app.post('/api/v1/productos',altaProducto)
//PUT /api/v1/productos/:id ---> modificar un registro
app.put('/api/v1/productos/:id',modificarProducto)

//DELETE /api/v1/productos/:id -----> eliminar un registro
app.delete('/api/v1/productos/:id', elimninarProducto )



app.listen(PUERTO)