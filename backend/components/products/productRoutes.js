// src/components/user/userRoutes.js
import { Router } from 'express';
import {ProductController} from "./productController.js";
// const productRoutes = Router();

// import { getProducts, createProduct, updateProduct, deleteProduct } from './productController.js';

// Definir rutas específicas del componente
// productRoutes.get('/', getProducts); // GET /api/users/:id
// productRoutes.post('/', createProduct); // POST /api/users
// productRoutes.put('/:id', updateProduct); // PUT /api/users/:id
// productRoutes.delete('/:id', deleteProduct); // DELETE /api/users/:id


const createProductRoutes = ({productModel}) => {
    // const productRoutes = Router();
    // console.log("Que es productRoutes?", productRoutes);
    // const router = Router();

    // try {
    //     const productController = await ProductController.getProductsController({ productModel });
    //     if (typeof productController === 'function') {
    //         productRoutes.get('/', productController);
    //         productRoutes.get('/', (req, res) => ProductController.getProductsController(req, res, productModel));

    //     } else {
    //         console.error("getProductsController no devolvió una función.");
    //     }
    // } catch(err) {
    //     console.log("Error en productRoutes.js:", err);
    // }

    // return productRoutes;

    const productRoutes = Router();
    const productController = new ProductController({ productModel }); // Instancia del controlador

    // Utiliza el método de instancia del controlador
    productRoutes.get('/', productController.getProductsController);
    return productRoutes;
}

export {createProductRoutes};
