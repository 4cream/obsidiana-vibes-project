// src/middlewares/corsMiddleware.js

import cors from 'cors';
import { cors as _cors } from '../config/app';

// Configuración personalizada de CORS
const corsOptions = {
  origin: _cors.origin,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const corsMiddleware = cors(corsOptions);

export {corsMiddleware};
