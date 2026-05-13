import * as modelo from './modelo.productos.mjs'


export function obtenerTodos(req, res) {
    const productos = modelo.obtenerTodos()
    res.json(productos)
}