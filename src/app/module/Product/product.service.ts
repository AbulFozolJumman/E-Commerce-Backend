import { IProduct } from './product.interface';
import Product from './product.model';

const createProductIntoDB = async (productData: IProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById({ _id: productId });
  return result;
};

const updateSingleProductIntoDB = async (
  productId: string,
  productData: IProduct,
) => {
  const result = await Product.findByIdAndUpdate(
    { _id: productId },
    productData,
    {
      new: true,
    },
  );
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateSingleProductIntoDB,
};
