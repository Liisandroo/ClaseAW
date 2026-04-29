import express from 'express'
import path from 'node:path'

const PUERTO = 3030
const app = express()

//Middleware
console.log(path.resolve('front'))
app.use(express.static(path.resolve('front')))


app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})