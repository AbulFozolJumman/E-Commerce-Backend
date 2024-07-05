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
  if (!(await Product.isProductExists(productId))) {
    throw new Error('Product does not Exist');
  }
  const result = await Product.findById({ _id: productId });
  return result;
};

const updateSingleProductIntoDB = async (
  productId: string,
  productData: IProduct,
) => {
  if (!(await Product.isProductExists(productId))) {
    throw new Error('Product does not Exist');
  }
  const result = await Product.findByIdAndUpdate(
    { _id: productId },
    productData,
    {
      new: true,
    },
  );
  return result;
};

const deleteSingleProductFromDB = async (productId: string) => {
  if (!(await Product.isProductExists(productId))) {
    throw new Error('Product does not Exist');
  }
  const result = await Product.findByIdAndDelete({ _id: productId });
  return result;
};

const searchProductFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  return await Product.find({
    name: { $regex: regex },
  });
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateSingleProductIntoDB,
  deleteSingleProductFromDB,
  searchProductFromDB,
};
