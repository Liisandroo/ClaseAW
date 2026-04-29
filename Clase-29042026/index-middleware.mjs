import express from 'express'

const PUERTO = 3030
const app = express()

//Middleware
function Middleware1(req, res, next){
    console.log('middleware 1')
    const existeUsuario = false
    if(existeUsuario){
        console.log('Usuario existe --> Pasa')
        return next()
    }
    //next()  // <-- Seguir la pila de ejecucion
    console.log('Usuario No existe --> No Pasa')
    res.status(403).send('Usuario no registrado')
}
/* function Middleware2(req, res, next){
    console.log('middleware 2')
    next()  // <-- Seguir la pila de ejecucion
} */
app.get('/', Middleware1, (req, res)=>{
    console.log('Ejecucion del callback final')
    res.send('QondaMen')
})

app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})