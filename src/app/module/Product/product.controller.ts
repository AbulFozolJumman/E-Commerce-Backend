import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import ProductValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
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
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Products not found',
      error: err.message,
    });
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getSingleProductFromDB(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Product not found',
      error: err.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProducts,
};
