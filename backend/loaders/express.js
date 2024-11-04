import express from 'express';
// import { createRoutes } from '../routes/index.js';
import {createProductRoutes} from '../components/products/productRoutes.js';

export const initExpressApp = ({productModel}) => {
    const app = express();

    const PORT = process.env.PORT ?? 1234;
    app.use(express.json());
    
    // Configura middlewares globales
    // app.use(corsMiddleware);
    // app.use(express.urlencoded({ extended: true }));
    
    // Cargar todas las rutas de los componentes bajo el prefijo '/api'
    // const routes = createRoutes({productModel});
    
    const routes = createProductRoutes({productModel});
    app.use('/products', routes);


    app.listen(PORT, () => {
        console.log(`server listening on port http://localhost:${PORT}`);
    });
};