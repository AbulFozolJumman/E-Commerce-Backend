import { model, Schema } from 'mongoose';
import { IOrder, OrderModel } from './order.interface';

const OrderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

// Custom static method
OrderSchema.statics.isOrderExists = async function (email: string) {
  return await this.findOne({ email });
};

const Order = model<IOrder, OrderModel>('Order', OrderSchema);

export default Order;
