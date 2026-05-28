import pool from '../../database/conexion.bd.mjs'

export async function obtenerTodos() {
    const resultado = await pool.query('SELECT * FROM Adicionales')
    return resultado.rows  //arreglo de registros
}

export async function crearUno(datos) {
    const {producto, precio, imagen} = datos
    const resultado = await pool.query(`
        INSERT INTO Adicionales
            (producto, precio, imagen)
        VALUES
            ($1, $2)
        RETURNING
            id, producto, precio, imagen    
        `,
        [
            producto,
            precio,
            imagen
        ])
        return resultado.rows
}