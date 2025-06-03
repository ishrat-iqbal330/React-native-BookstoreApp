import express from "express";
import dotenv from "dotenv";
import AuthRoutes from "./routes/authRoutes.js";
import BooksRoutes from "./routes/booksRoutes.js";
import connectDB from "./db/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", AuthRoutes);
app.use("/api/books", BooksRoutes);


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
