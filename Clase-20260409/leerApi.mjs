// Archivo para leer Api

try{
const respuesta = await fetch ('https://api.escuelajs.co/api/v1/users')

const productos = await respuesta.json()

console.log(productos)
}catch(e){

console.log(e)

}