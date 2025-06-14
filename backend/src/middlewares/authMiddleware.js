import jwt from "jsonwebtoken";
import User from "../models/User.js";


const protectRoute = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token)
      return res
        .status(401)
        .json({ message: "No token found , access denied" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ message: "Invalid token , access denied" });

    const user = await User.findById(decoded.id);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not found , access denied" });

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Authentication error , token is not valid" });
  }
};

export default protectRoute;
