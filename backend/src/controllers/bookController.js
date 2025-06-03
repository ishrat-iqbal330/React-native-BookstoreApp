import cloudinary from "../lib/cloudinary.js";
import Book from "../models/Book.js";

const NewBook = async (req, res) => {
  try {
    const { title, caption, ratings, image } = req.body;
    if (!image || !title || !caption || !ratings) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // upload image to cloudinary

    const result = await cloudinary.uploader.upload(image);
    const imageURL = result.secure_url;

    const newBook = new Book({
      title,
      caption,
      ratings,
      image: imageURL,
      user: req.user._id, // Assuming req.user is set by an authentication middleware
    });
    await newBook.save();
    res.status(201).json({
      message: "Book added successfully",
      newBook,
    });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "" });
  }
};

export { NewBook };
