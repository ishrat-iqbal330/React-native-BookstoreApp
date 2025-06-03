import { Router } from "express";
import { NewBook } from "../controllers/bookController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const route = Router();

route.post("/", protectRoute , NewBook);

export default route;
