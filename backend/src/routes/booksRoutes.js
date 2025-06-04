import { Router } from "express";
import { NewBook , AllBooks, DeleteBook , UserBooks} from "../controllers/bookController.js";
import protectRoute from "../middlewares/authMiddleware.js";
const route = Router();

route.post("/", protectRoute, NewBook);
route.get("/", protectRoute, AllBooks);
route.delete("/:id", protectRoute, DeleteBook);
route.get("/user" , protectRoute, UserBooks);

export default route;
