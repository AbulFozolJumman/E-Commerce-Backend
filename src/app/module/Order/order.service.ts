import Product from '../Product/product.model';
import { IOrder } from './order.interface';
import Order from './order.model';

const createOrderIntoDB = async (orderData: IOrder) => {
  const productData = await Product.findById(orderData.productId);
  if (!productData) {
    throw new Error('Product not found');
  }

  if (productData.inventory.quantity < orderData.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  const result = await Order.create(orderData);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmailFromDB = async (email: string) => {
  if (!(await Order.isOrderExists(email))) {
    throw new Error('Order not found');
  }
  const result = await Order.find({ email });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getOrderByEmailFromDB,
};
