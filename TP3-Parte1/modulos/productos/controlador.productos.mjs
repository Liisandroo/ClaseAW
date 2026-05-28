import * as modelo from './modelo.productos.mjs'

export async function obtenerTodos(req,res){
    const producto = await modelo.obtenerTodos()
    if(producto.length === 0){
        return res.status(404).json({mensaje: 'Registo no encontrado'})
    }
    //Respuesta al cliente 
    res.json(producto)
}

export async function crearUno(req, res) {
    const datosProductos = req.body
    if(producto.length === 0){
        return res.status(400).json({mensaje: 'No se pudo dar de alta'})
    }
 res.json(producto)
}