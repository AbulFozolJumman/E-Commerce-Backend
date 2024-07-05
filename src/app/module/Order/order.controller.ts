import { Request, Response } from 'express';
import OrderValidationSchema from './order.validation';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodParsedData = OrderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
