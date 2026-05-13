import express from 'express';
import { buscarNuevitos, obtenerAutos, obtenerPorId } from '../controlador/controlador.auto.mjs';

const router = express.Router();

router.get('/api/v1/autos', obtenerAutos);             // Endpoint REST 1

router.get('/api/v1/autos/:id', obtenerPorId);       // Endpoint REST 2

router.get('/api/v1/nuevitos', buscarNuevitos)       // Procedimiento

export default router;