import { Schema, model } from 'mongoose';
import {
  IInventory,
  IProduct,
  IVariant,
  ProductModel,
} from './product.interface';

const VariantSchema = new Schema<IVariant>({
  type: {
    type: String,
    required: [true, 'Variant type is required'],
  },
  value: {
    type: String,
    required: [true, 'Variant value is required'],
  },
});

const InventorySchema = new Schema<IInventory>({
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'Inventory stock message is required'],
  },
});

const ProductSchema = new Schema<IProduct, ProductModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    tags: {
      type: [String],
      required: [true, 'Tags are required'],
    },
    variants: {
      type: [VariantSchema],
      required: [true, 'Variants are required'],
      _id: false,
    },
    inventory: {
      type: InventorySchema,
      required: [true, 'Inventory information is required'],
      _id: false,
    },
  },
  {
    versionKey: false,
  },
);

ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });

// Custom static method
ProductSchema.statics.isProductExists = async function (productId: string) {
  return await this.findOne({ _id: productId });
};

const Product = model<IProduct, ProductModel>('Product', ProductSchema);

export default Product;
