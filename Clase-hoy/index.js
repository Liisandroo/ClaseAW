// console.log("hola men")
// vamos a leer un archivo txt
import fsp from 'node:fs/promises';

try{
    const contendio = await fsp.readFile('./texto.txt' , 'utf8')
    console.log(contendio)
}catch(e){
  console.log(e)
}