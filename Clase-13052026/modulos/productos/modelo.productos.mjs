import productos from "../../productos.mjs";

export function obtenerTodos(){
    /* Haria una consulta a una BD */
    return productos
    



}

export function obtenerUno(req, res){
    const id_producto = Number(req.params.id)

    //filtramos
    const ProductosFiltrados = productos.datos.filter((producto) => {
        return id_producto === Number(producto.id)
    })

    if (ProductosFiltrados.length > 0) {
        res.json(ProductosFiltrados)
    } else {
        const respuesta = {
            mensaje: 'Producto no encontrado'
        }
        res.status(404).json(respuesta)
    }
}