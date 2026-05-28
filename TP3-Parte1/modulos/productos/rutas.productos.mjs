import { Router }  from "express"
import * as controlador from  './controlador.productos.mjs'

const rutaProductos = new Router()

rutaProductos.get('/api/v1/productos',controlador.obtenerTodos)
rutaProductos.get('/api/v1/productos', controlador.crearUno)

export default rutaProductos