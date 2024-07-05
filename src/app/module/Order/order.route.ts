import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/', OrderControllers.createOrder);

// router.get('/', ProductControllers.getAllProducts);

// router.get('/:productId', ProductControllers.getSingleProduct);

// router.put('/:productId', ProductControllers.updateProduct);

// router.delete('/:productId', ProductControllers.deleteSingleProduct);

export const OrderRoutes = router;
