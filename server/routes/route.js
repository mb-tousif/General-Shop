import express from "express";
import { getFurnitures } from "../Controller/furnitureController.js";
import { userLogin, userSignup } from "../Controller/userController.js";


const router = express.Router();

router.post("/signup", userSignup)
router.post("/login", userLogin)
router.get("/furnitures", getFurnitures);

export default router;