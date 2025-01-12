"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getAllBooks = exports.getOneBook = exports.addNewBook = void 0;
const book_1 = __importDefault(require("../models/book"));
const addNewBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBook = new book_1.default(req.body);
        const savedBook = yield newBook.save();
        res.status(201).json(savedBook);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.addNewBook = addNewBook;
const getOneBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchedBook = yield book_1.default.findById(req.params.id);
        if (!fetchedBook) {
            res.status(404).json({ message: "Cannot find such a book" });
            return;
        }
        res.status(200).json(fetchedBook);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getOneBook = getOneBook;
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fetchingAllBooks = yield book_1.default.find();
        res.status(200).json(fetchingAllBooks);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getAllBooks = getAllBooks;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateBook = yield book_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updateBook) {
            res.status(404).json({ message: "Update failed" });
            return;
        }
        res.status(200).json(updateBook);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteBook = yield book_1.default.findByIdAndDelete(req.params.id);
        if (!deleteBook) {
            res.status(40).json({ message: "Could not delete" });
            return;
        }
        res.status(200).json({ message: "Successfully deleted the book" });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.deleteBook = deleteBook;
