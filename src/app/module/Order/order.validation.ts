import { Types } from 'mongoose';
import { z } from 'zod';

const OrderValidationSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  productId: z.custom<Types.ObjectId>(),
  price: z.number().positive('Price must be a positive number'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
});

export default OrderValidationSchema;
