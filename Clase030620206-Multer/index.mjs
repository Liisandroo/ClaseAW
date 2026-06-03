import express from 'express'
import multer from 'multer'
import { nanoid } from 'nanoid'
import mime from 'mime-type'
//usar path

const app = express()

const PUERTO = 3030

const almacenamiento = multer.diskStorage({
  destination: function (req, file, cb) {
    //Chequeos

    
    cb(null, './archivos');
  },
  filename: function (req, file, cb) {
    // const extension = mime.extension(file.mimetype)
    const nombreImagen = nanoid()
    cb(null, nombreImagen);
  },
});


//Ejecutamos multer
const subirArchivo = multer({
    storage: almacenamiento
})

const gestionArchivos = subirArchivo.single('imagen')

app.use('/admin', express.static('./front-admin'))

app.post('/subir-archivo', (req, res) => {
    gestionArchivos(req, res, (error) => {
        if (error) return res.status(500).json({ mensaje: 'Error en el servidor' })

        console.log(req.file)
        //Si no hay error
        //-------
        res.json({ mensaje: 'ruta subida' })

    })


})

app.listen(PUERTO)