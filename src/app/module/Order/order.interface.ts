import { Model, Types } from 'mongoose';

export type IOrder = {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};

export interface OrderModel extends Model<IOrder> {
  // eslint-disable-next-line no-unused-vars
  isOrderExists(email: string): Promise<IOrder | null>;
}
