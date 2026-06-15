import jwt from 'jsonwebtoken';
import express from 'express';
import { buscarNuevitos, obtenerAutos, obtenerPorId, autenticarUsuario } from '../controlador/controlador.auto.mjs';
import { verificarToken } from '../middleware/middleware.mjs';

const router = express.Router();

router.get('/api/v1/autos', obtenerAutos);             // Endpoint REST 1

router.get('/api/v1/autos/:id', obtenerPorId);       // Endpoint REST 2

router.get('/api/v1/nuevitos', buscarNuevitos)       // Procedimiento

router.post('/autenticar', autenticarUsuario)

router.get('/privado', verificarToken, (req, res) => {
    res.send(`¡Bienvenido ${req.usuario.user} al area privada`);
});

export default router;