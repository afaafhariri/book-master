import express from "express";
import {
  addNewBook,
  getOneBook,
  getAllBooks,
  updateBook,
  deleteBook,
} from "../controllers/bookController";

const bookRouter = express.Router();
bookRouter.post("/", addNewBook);
bookRouter.get("/:id", getOneBook);
bookRouter.get("/", getAllBooks);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
