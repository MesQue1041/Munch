import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verifyOrder } from "../controllers/orderController.js"
import pkg from "jsonwebtoken";
const { verify } = pkg;

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);




export default orderRouter;