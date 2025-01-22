"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const bookRouter = express_1.default.Router();
bookRouter.post("/addbook", bookController_1.addNewBook);
bookRouter.get("/getbook/:id", bookController_1.getOneBook);
bookRouter.get("/", bookController_1.getAllBooks);
bookRouter.put("/update/:id", bookController_1.updateBook);
bookRouter.delete("/delete/:id", bookController_1.deleteBook);
bookRouter.delete("/deletebooks", bookController_1.deleteAllBooks);
bookRouter.post("/addrating/:id", bookController_1.addRating);
exports.default = bookRouter;
