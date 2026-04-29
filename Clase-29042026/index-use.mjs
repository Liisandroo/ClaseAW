import express from 'express'

const PUERTO = 3030
const app = express()

//Middleware
function Middleware1(req, res, next){
    console.log('middleware 1')
    next()
}
//La ruta el 'use' sirve como prefijo /
app.use(Middleware1)


app.get('/', (req, res)=>{
    console.log('Ejecucion del callback final')
    res.send('QondaMen')
})

app.get('/saludo', (req, res)=>{
    console.log('Ejecucion del callback final con saludo')
    res.send('Q onda ruta /saludo')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})