import Furniture from "../model/furnitureSchema.js"

export const getFurnitures = async (req, res) => {
  try {
    // conditional based data finding
    // Product.find({ id: "product1" });
    // find all data
    const furnitures = await Furniture.find({});
    res.status(200).json(furnitures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
