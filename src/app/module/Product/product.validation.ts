import { z } from 'zod';

const VariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const InventorySchema = z.object({
  quantity: z.number().min(0, 'Product quantity must be a non-negative number'),
  inStock: z.boolean(),
});

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number().positive('Price must be a positive number'),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchema).nonempty('At least one variant is required'),
  inventory: InventorySchema,
});

export default ProductSchema;
