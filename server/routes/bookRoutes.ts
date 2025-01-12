import express from "express";
import {
  addNewBook,
  getOneBook,
  getAllBooks,
  updateBook,
  deleteBook,
} from "../controllers/bookController";

const bookRouter = express.Router();
bookRouter.post("/addbook", addNewBook);
bookRouter.get("/:id", getOneBook);
bookRouter.get("/getallbooks", getAllBooks);
bookRouter.put("/:id", updateBook);
bookRouter.delete("id", deleteBook);

export default bookRouter;
