import { Router } from "express";
import userRouter from "./users.js";
import hotelManagerRouter from "./hotelManagerRouter.js";
import administrationRouter from "./administration.js";

import authRouter from "./auth.js";

const appRouter = Router();

appRouter.use(userRouter);
appRouter.use(hotelManagerRouter)
appRouter.use(administrationRouter)
appRouter.use(authRouter);


export default appRouter;