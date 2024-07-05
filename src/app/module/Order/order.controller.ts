/* eslint-disable no-console */
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
      message: err.message,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (email) {
      const { email } = req.query;
      const result = await OrderServices.getOrderByEmailFromDB(email as string);

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully for user email!',
        data: result,
      });
    } else {
      const result = await OrderServices.getAllOrderFromDB();

      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Order not found',
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrder,
};
