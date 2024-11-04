// Capa Web
// Esta capa maneja las solicitudes HTTP y las respuestas. Aquí es donde se utilizan los objetos req y res.
import { ProductService } from './productService.js';
// import {ProductModel} from './productModel.js';


export class ProductController {
  constructor({ productModel }) {
    this.productModel = productModel;
  }
  getProductsController = async (req, res) => {
    try {
      const products = await ProductService.getAllProducts(this.productModel); // Pasa el modelo desde la instancia
      return res.json(products);
    } catch (error) {
      console.error("Error en getProductsController:", error);
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
  };

  // getProductsController = async (req, res) => {
  //   try {
  //     const products = await ProductService.getAllProducts(this.productModel);
  //     return res.json(products);
  //   } catch (error) {
  //     return res.status(500).json({ error: 'Error al obtener productos' });
  //   }
  // };
}