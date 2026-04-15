// modulo http 

import http from 'node:http'
import fsp from 'node:fs/promises'
import path from 'node:path'

const app = http.createServer(async (peticion, respuesta) => {  // Se va a ejecutar cuando haya una peticion o Request 
    //console.log('peticion recibida')
    //console.log(peticion.url)

    if (peticion.method === 'GET') {

        if (peticion.url === '/') {
            respuesta.statusCode = 200
            return respuesta.end('estas en la raiz')
        }

        if (peticion.url === '/suma') {
            const resultado = (5 + 3).toString()
            respuesta.statusCode = 200
            return respuesta.end(resultado)
        }
    }

    if (peticion.method === 'POST') {
        if (peticion.url === '/procesoformulario') {
            //
            //console.log('post')
            return respuesta.end('Se le hizo a la peticion POST')
        }

        if (peticion.url === '/guardardatos') {
            const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')
            const datosApi = await respuestaApi.text()


            try {
                await fsp.writeFile(path.join('./datosapi.txt'), datosApi)
                respuesta.statusCode = 201
                return respuesta.end('Guardaste Los Datos')
            } catch (error) {
                respuesta.statusCode = 500
                return respuesta.end('Error En El Servidor')
            }
        }
    }

    respuesta.statusCode = 404
    respuesta.end('Recurso no encontrado') //Fallback

    //respuesta.end('Visca Barca') // Es lo ultimo -> no se puede ejecutar dos veces 

})
app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})    