import mongoose from "mongoose";

const furnitureSchema = new mongoose.Schema({
  id: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const furniture = mongoose.model("furniture", furnitureSchema);

export default furniture;