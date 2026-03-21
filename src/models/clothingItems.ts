import mongoose from "mongoose";

const clothingItemSchema = new mongoose.Schema({
  name: {},
  size: {},
  brand: {},
  price: {},
});

export const ClothingItem = mongoose.model("ClothingItem", clothingItemSchema);
