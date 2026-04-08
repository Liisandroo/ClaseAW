// Leer un Api
import fsp from 'node:fs/promises'
import path from 'node:path'

try{
// hacer peticion con fetch -> con promesas 
const respuesta = await fetch ('https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos')
// Extraemos del cuerpo de la peticion los datos 
const productos = await respuesta.json()

//creamos la ruta
const ruta = path.join('./api.json')

// Guardar los datos en un archivo
const contenido = JSON.stringify(productos, null, 4) // <-- pasa de JS a forma JSON -> Texto
await fsp.writeFile(ruta, contenido)

// console.log(productos)
}catch(e){
    console.log(e)
}