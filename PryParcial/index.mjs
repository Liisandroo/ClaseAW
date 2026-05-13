import express from 'express'
import autosRutas from './rutas/rutas.mjs'
import logger from './middleware/middleware.mjs'

const PUERTO = 3030
const app = express()

app.use(express.json());

app.use(logger);

app.use('/', autosRutas);



app.listen(PUERTO)