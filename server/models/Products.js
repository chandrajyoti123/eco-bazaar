import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    brand: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Products = model("Product", ProductSchema);
export default Products;
