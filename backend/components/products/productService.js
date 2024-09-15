// Capa de Negocio
// Esta capa contiene la lógica de negocio. No tiene conocimiento de la capa web (Express).

// src/components/product/product.service.js
// import * as productModel from './productModel.js';


export const getAllProducts = async ({productModel}) => {
  return await productModel.getAllProducts();
};



// Obtener un producto por su ID
const fetchProductById = async (id) => {
  return await ProductModel.getProductById(id);
};

// Crear un nuevo producto con lógica adicional si es necesario
const addNewProduct = async (productData) => {
  // Ejemplo de lógica de negocio: validar datos antes de crear
  if (!productData.name || !productData.price) {
    throw new Error('Name and price are required fields');
  }

  return await ProductModel.createProduct(productData);
};

// Actualizar un producto existente con lógica de negocio
const modifyProduct = async (id, productData) => {
  // Ejemplo: Verificar si el producto existe antes de actualizar
  const existingProduct = await ProductModel.getProductById(id);
  if (!existingProduct) {
    throw new Error('Product not found');
  }

  return await ProductModel.updateProduct(id, productData);
};

// Eliminar un producto con lógica de negocio adicional si es necesario
const removeProduct = async (id) => {
  // Ejemplo: Lógica adicional antes de eliminar
  const existingProduct = await ProductModel.getProductById(id);
  if (!existingProduct) {
    throw new Error('Product not found');
  }

  return await ProductModel.deleteProduct(id);
};

// export {
//   fetchAllProducts,
//   fetchProductById,
//   addNewProduct,
//   modifyProduct,
//   removeProduct
// };

