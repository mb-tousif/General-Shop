import TopOffer from "../model/topOfferSchema.js"

export const getTopOffers = async (req, res) => {
  try {
    // conditional based data finding
    // Product.find({ id: "product1" });
    // find all data
    const topOffers = await TopOffer.find({});
    console.log(topOffers);
    res.status(200).json(topOffers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};