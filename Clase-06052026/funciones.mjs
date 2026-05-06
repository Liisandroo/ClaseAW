import productos from "./productos.mjs"



export function obtenerProductos(req, res) {
    res.json(productos)
}

export function obtenerProductosPorId(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) //verificar si es numero > Cast > NaN

    //filtramos
    const ProductosFiltrados = productos.filter((producto) => {
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

export function altaProducto(req, res) {
    //logica extra
    const nuevoProducto = req.body
    productos.push(nuevoProducto)
    const respuesta= {
        mensaje:'Producto dado de alta'
    }
    res.json(respuesta)
}

export function elimninarProducto(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) //verificar si es numero > Cast > NaN


    //filtramos
    const ProductosFiltrados = productos.filter((producto) => {
        return id_producto !== Number(producto.id)
    })

    productos.length = 0
    productos.push(...ProductosFiltrados)

    
        const respuesta = {
            mensaje: 'Producto eliminado'
        }
    res.json()
}