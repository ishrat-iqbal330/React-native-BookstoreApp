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
      user: req.user._id,
    });
    await newBook.save();
    res.status(201).json({
      message: "Book added successfully",
      newBook,
    });
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ message: "Error adding book" });
  }
};

const AllBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const books = await Book.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("user", "userName profileImage");

    const totalBooks = await Book.countDocuments();
    res.json({
      books,
      currentPage: page,
      totalBooks,
      totalPages: Math.ceil(totalBooks / limit),
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Error fetching books" });
  }
};

const DeleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    // Delete image from cloudinary
    if (book.image && book.image.includes("cloudinary")) {
      try {
        const publicId = book.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      } catch (error) {
        console.error("Error deleting image from cloudinary:", error);
      }
    }

    await book.deleteOne();
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const UserBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(books);
  } catch (error) {
    console.log("Error fetching user books:", error);

    res.status(500).json({ message: "Internal server error" });
  }
};

export { NewBook, AllBooks, DeleteBook , UserBooks };
