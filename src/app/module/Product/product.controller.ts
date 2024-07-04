import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import ProductValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const zodParsedData = ProductValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
};
