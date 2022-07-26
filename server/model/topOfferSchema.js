import mongoose from "mongoose";

const topOfferSchema = new mongoose.Schema({
  id: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});

const topOffer = mongoose.model("topOffer", topOfferSchema);

export default topOffer;