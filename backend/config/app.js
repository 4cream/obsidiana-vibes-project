// src/config/app.js

import 'dotenv/config'; // Carga las variables de entorno desde el archivo .env

const config = {
  app: {
    port: process.env.PORT || 3000, // Puerto en el que corre el servidor
    env: process.env.NODE_ENV || 'development', // Entorno de la aplicación
  },
  db: {
    host: process.env.DB_HOST || 'localhost', // Host de la base de datos MySQL
    user: process.env.DB_USER || 'root', // Usuario de la base de datos MySQL
    password: process.env.DB_PASSWORD || 'toor', // Contraseña de la base de datos MySQL
    database: process.env.DB_NAME || 'obsydiana_db', // Nombre de la base de datos MySQL
    port: process.env.DB_PORT || 3306
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*', // Configuración de CORS
  },
  // Puedes agregar más configuraciones como API keys, tiempo de sesiones, etc.
};

export { config };
