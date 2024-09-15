// src/loaders/mongoose.js
const mongoose = require('mongoose');
const dbConfig = require('../config/db');

const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.uri, dbConfig.options);
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    process.exit(1);
  }
};

module.exports = connectDB;
