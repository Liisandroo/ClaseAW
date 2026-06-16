import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import logger from './middleware/middleware.mjs';
import autosRutas from './rutas/rutas.mjs';
import { verificarToken } from './middleware/middleware.mjs';

dotenv.config();

const PUERTO = process.env.PORT 
const app = express()

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(logger);

//Publico
app.use('/login', express.static('./fronts/front-login'));
//Privado
app.use('/autos', verificarToken, express.static('./fronts/front-autos'));
app.use('/auto-detalle', verificarToken, express.static('./fronts/front-detalles'));
app.use('/nuevitos', verificarToken, express.static('./fronts/front-nuevitos'));
app.use('/', autosRutas);



app.listen(PUERTO)