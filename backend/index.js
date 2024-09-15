import 'dotenv/config';
import {initExpressApp} from './loaders/express.js';

import {ProductModel} from './components/products/productModel.js';

import { connectDB } from './loaders/mysql2.js';


if(connectDB) {
    console.log("Hay conexion a la BD");
} else {
    console.log("No hay conexcion con la BD");
}

initExpressApp({productModel: ProductModel});