//Modulos

import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

const app = http.createServer(async (peticion, respuesta) => {
    //console.log('Peticion recibida')
    //respuesta.end('vas bien wachin')
    if (peticion.method === 'GET') {
        if (peticion.url === '/') {
            respuesta.statusCode = 200
            return respuesta.end('estas en el inicio pai')
        }
        if (peticion.url === '/usuarios') { 
            try {
                const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')
                const datosApi = await respuestaApi.text()
                await fsp.writeFile(path.join('./datosapi.json'), datosApi)
                respuesta.statusCode = 201
                respuesta.setHeader('content-type', 'application/json')
                return respuesta.end(datosApi)
            } catch (error) {
                respuesta.statusCode = 404
                return respuesta.end('Recurso no encontrado')
            }
        }
        respuesta.statusCode = 404
        respuesta.end('Recurso no encontrado')
    }

})
app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})