import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const register = async (req, res) => {
  try {
    const { email, userName, password } = req.body;

    if (!email || !userName || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    if (userName.length < 3) {
      return res
        .status(400)
        .json({ message: "Username must be at least 3 characters long" });
    }

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res
        .status(400)
        .json({ message: "User with this Email already exists" });
    }

    const userNameExist = await User.findOne({ userName });
    if (userNameExist) {
      return res
        .status(400)
        .json({ message: "User with this Username already exists" });
    }

    const profileImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`;

    const newUser = new User({
      email,
      userName,
      password,
      profileImage: profileImage,
    });
    await newUser.save();

    const token = generateToken(newUser._id);
    res.status(201).json({
      message: "User login successfully",
      token: token,
      user: {
        _id: newUser._id,
        email: newUser.email,
        userName: newUser.userName,
        profileImage: newUser.profileImage,
      },
    });
  } catch (error) {
    console.error("Error in register:", error);
    res.status(500).json({ message: `Error in register: ${error.message}` });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = generateToken(user._id);
    res.status(200).json({
      message: "User login successfully",
      token: token,
      user: {
        _id: user._id,
        email: user.email,
        userName: user.userName,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: `Error in login: ${error.message}` });
  }
};

export { register , login };
