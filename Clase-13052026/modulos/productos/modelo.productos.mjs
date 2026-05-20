import productos from "../../productos.mjs";

export function obtenerTodos(){
    /* Haria una consulta a una BD */
    return productos

}

export function obtenerUno(id){
    //filtramos
    const ProductosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) === id
    })
return {
    ultimo_id:5,
    datos: ProductosFiltrados
}
}