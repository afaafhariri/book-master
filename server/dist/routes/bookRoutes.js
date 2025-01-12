"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const bookRouter = express_1.default.Router();
bookRouter.post("/addbook", bookController_1.addNewBook);
bookRouter.get("/:id", bookController_1.getOneBook);
bookRouter.get("/getallbooks", bookController_1.getAllBooks);
bookRouter.put("/:id", bookController_1.updateBook);
bookRouter.delete("id", bookController_1.deleteBook);
exports.default = bookRouter;
