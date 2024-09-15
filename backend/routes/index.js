// src/routes/index.js

import {Router} from 'express';
import { createProductRoutes } from '../components/products/productRoutes.js'; // Importa rutas de productos
// import {createProductRoutes} from '../components/products/index.js';

const router = Router();
// const mainRouter = Router();
// Registra las rutas de productos bajo el path '/products'
const createRoutes = async ({productModel}) => {
    // const router = Router();
    try {
        const productRoutes = await createProductRoutes({productModel});
        console.log("Que es productRoutes? ", productRoutes);
        
        router.use('/', productRoutes);
        
    } catch(err) {
        console.log("Sale error desde index.js de las rutas");
        
    }


    return router;
}

// Aquí puedes agregar más rutas de otros componentes en el futuro, como rutas de usuarios
// import { userRoutes } from '../components/users';
// router.use('/users', userRoutes);

export {createRoutes};
