import express from 'express';
import { ProductRoutes } from '../module/Product/product.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
