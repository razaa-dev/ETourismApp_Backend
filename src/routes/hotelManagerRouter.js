import { Router } from "express";
// import userController from "../controllers/users.js";
 import hotelManagerController from "../controllers/hotelManager.js";

const hotelManagerRouter = Router();
hotelManagerRouter.get("/hotels",hotelManagerController.getAll);
hotelManagerRouter.get("/hotel/:id",hotelManagerController.getOneById);
hotelManagerRouter.post("/hotel",hotelManagerController.create);
hotelManagerRouter.put("/hotel/:id",hotelManagerController.update);
hotelManagerRouter.delete("/hotel/:id",hotelManagerController.delete);

export default hotelManagerRouter;