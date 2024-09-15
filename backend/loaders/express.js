import express from 'express';
import { createRoutes } from '../routes/index.js';

export const initExpressApp = ({productModel}) => {
    const app = express();

    const PORT = process.env.PORT ?? 1234;

    // Configura middlewares globales
    // app.use(corsMiddleware);
    app.use(express.json());
    // app.use(express.urlencoded({ extended: true }));

    // Cargar todas las rutas de los componentes bajo el prefijo '/api'
    const routes = createRoutes({productModel});
    app.use('/products', routes);


    app.listen(PORT, () => {
        console.log(`server listening on port http://localhost:${PORT}`);
    });
};