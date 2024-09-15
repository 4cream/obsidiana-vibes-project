// Capa de Datos
// Esta capa interactúa directamente con la base de datos o con los modelos de datos.

// src/components/products/productModel.js
import { connectDB } from '../../loaders/mysql2.js'; // Importa la conexión a MySQL desde el loader


export class ProductModel {

    // Función para obtener todos los productos
    static getAllProducts = async () => {
        const [rows] = await connectDB.query('SELECT * FROM products');
        return rows;
    };
}


// Función para obtener un producto por su ID
const getProductById = async (id) => {
    const [rows] = await connectDB.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0]; // Retorna solo el primer resultado
};

// Función para crear un nuevo producto
const createProduct = async (productData) => {
    const { name, price, description } = productData;
    const [result] = await connectDB.query(
        'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
        [name, price, description]
    );
    return { id: result.insertId, ...productData }; // Retorna el nuevo producto con su ID
};

// Función para actualizar un producto existente
const updateProduct = async (id, productData) => {
    const { name, price, description } = productData;
    await connectDB.query(
        'UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?',
        [name, price, description, id]
    );
    return { id, ...productData }; // Retorna el producto actualizado
};

// Función para eliminar un producto
const deleteProduct = async (id) => {
    await connectDB.query('DELETE FROM products WHERE id = ?', [id]);
};

// export {
//     getAllProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct
// };
