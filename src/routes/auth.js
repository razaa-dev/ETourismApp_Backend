import { Router } from "express";
import authController from "../controllers/auth.js";

const authRouter = Router();

authRouter.post("/user/login",authController.login);
authRouter.post("/hotelManager/login",authController.HotelManagerlogin);
authRouter.post("/administration/login",authController.administrationLogin);

export default authRouter;