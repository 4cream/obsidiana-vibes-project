// src/components/user/userRoutes.js
import { Router } from 'express';
import {ProductController} from "./productController.js";
const productRoutes = Router();

// import { getProducts, createProduct, updateProduct, deleteProduct } from './productController.js';

// Definir rutas específicas del componente
// productRoutes.get('/', getProducts); // GET /api/users/:id
// productRoutes.post('/', createProduct); // POST /api/users
// productRoutes.put('/:id', updateProduct); // PUT /api/users/:id
// productRoutes.delete('/:id', deleteProduct); // DELETE /api/users/:id


const createProductRoutes = async ({productModel}) => {
    const router = Router();

    try {
        const productController = await this.ProductController.getProductsController({productModel});
        console.log("Que trae productController? ", productController);
        productRoutes.get('/', productController);
    } catch(err) {
        console.log("Sale error desde productRoutes.js", err);
        
    }
/* inventing */
        // router.use((req, res, next) => {
        //     req.productModel = productModel;
        //     next();
        // });
/* ---------- */

    // router.use((req, res, next) => {
    //     req.productModel = productModel;
    //     next();
    //   });

    return router;
}

export {createProductRoutes};
