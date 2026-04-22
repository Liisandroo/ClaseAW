import express from 'express'

const PUERTO = 3030


//instancia servidor express
const app = express()

app.get('/', (req, res)=>{

    res.set('content-type', 'text/html') //--> cabecera
    res.status(200) // --> codigo estado
    res.end('<h1>Hola men con get</h1>') // --> body

})
app.get('/materias', (req, res)=>{

    res.set('content-type', 'application/json') //--> cabecera
    res.status(200) // --> codigo estado
    res.end(`{
        "materia 1": "Base de datos"
        "materia 2": "Analisis de sistemas"
        "materia 3": "Aplicaciones web II"
        "materia 4": "Practica II"
        
        }`) 

})
app.get('/saludo', (req, res)=>{
    res.end('q onda men')

})
app.post('/', (req, res)=>{
    res.set('content-type', 'application/json')
    res.end('{"materia": "AW2"}')

})

//Abrir un puerto
app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})
