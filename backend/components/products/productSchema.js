// src/components/product/productSchema.js
import { z } from 'zod';

const ProductSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').max(100),
  price: z.number().positive('El precio debe ser un número positivo'),
  // otras validaciones...
});

export {ProductSchema};