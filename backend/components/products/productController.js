// Capa Web
// Esta capa maneja las solicitudes HTTP y las respuestas. Aquí es donde se utilizan los objetos req y res.
import {getAllProducts} from './productService.js';


export class ProductController {
    constructor({productModel}){
        this.productModel= productModel;
    }
    static getProductsController = async (req, res) => {
        console.log("La request = ", req.productModel);
        
        try {
          const products = await getAllProducts(req.productModel); // Llama a la lógica de negocio
          console.log("Los products?", products);
          
          return res.json(products);

        } catch (error) {
          return res.status(500).json({ error: 'Error al obtener productos' });
        }
      };
}