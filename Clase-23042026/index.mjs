import express from 'express'

const PUERTO = 3030
const productos = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 2000
    },
    {
        id: 2,
        nombre: "Pantalon",
        precio: 2000
    }

]
//instancia servidor express
const app = express()

//avisar a express si hay datos del cliente en formato json
app.use(express.json())

const peticionGetEnRaiz = (req, res) => {
    res.status(200) // --> codigo estado
    res.end('Heyyy') // --> body

}

//peticionGetEnRaiz()


app.get('/', peticionGetEnRaiz)

app.get('/productos', (req, res) => {
    res.json(productos)
    //res.set('content-type', 'application/json')
    //res.end(JSON.stringify(productos))
})
app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    //Filtrar
    const arregloFiltrado = productos.filter((producto)=>{
        return producto.id === id
    })
    res.json(arregloFiltrado)
    res.status(200)

})
app.post('/productos', (req, res) => {
    //agrega al objeto req una propiedad llamada "body"
    const producto = req.body
    productos.push(producto)
    res.status(201).json({ mensaje: 'Producto Creado' })
})
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})