import productos from "./productos.mjs"



export function obtenerProductos(req, res) {
    res.json(productos.datos)
}

export function obtenerProductosPorId(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) //verificar si es numero > Cast > NaN

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

export function altaProducto(req, res) {
    //logica extra
    const nuevoProducto = req.body;
    const proximoID = Number(productos.ultimo_id) + 1

    //agregar propiedad id
    nuevoProducto.id = proximoID
    //actualizr la referencia
    productos.ultimo_id = proximoID


    productos.datos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado de alta'
    };
    res.json(respuesta);
}
export function modificarProducto(req, res) {
    const id_producto = Number(req.params.id)
    const productoModificar = req.body

    productos.datos.forEach((producto) => {
        //obteniendo el indice con indexOF()
        const indice = productos.datos.indexOf(producto)
        //
        if (id_producto === Number(producto.id)) {
            productoModificar.id = id_producto
            productos.datos[indice] = productoModificar

        }
    })
      const respuesta = {
                mensaje: 'Producto Modificado' + id_producto
            };
            res.json(respuesta);
}

export function elimninarProducto(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) //verificar si es numero > Cast > NaN


    //filtramos
    const ProductosFiltrados = productos.datos.filter((producto) => {
        return id_producto !== Number(producto.id)
    })

    productos.datos.length = 0
    productos.datos.push(...ProductosFiltrados)


    const respuesta = {
        mensaje: 'Producto eliminado'
    }
    res.json(respuesta)
}