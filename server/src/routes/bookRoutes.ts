import express from "express";
import {
  addNewBook,
  getOneBook,
  getAllBooks,
  updateBook,
  deleteBook,
  deleteAllBooks,
  addRating,
} from "../controllers/bookController";

const bookRouter = express.Router();
bookRouter.post("/addbook", addNewBook);
bookRouter.get("/getbook/:id", getOneBook);
bookRouter.get("/", getAllBooks);
bookRouter.put("/update/:id", updateBook);
bookRouter.delete("/delete/:id", deleteBook);
bookRouter.delete("/deletebooks", deleteAllBooks);
bookRouter.post("/addrating/:id", addRating);
export default bookRouter;
