// Leer un Api

try{
//hacer peticion con fetch -> con promesas 
const respuesta = await fetch ('https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos')
//Extraemos del cuerpo de la peticion los datos 
const productos = await respuesta.json()
console.log(productos)
}catch(e){
    console.log(e)
}