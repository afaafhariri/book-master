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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRating = exports.deleteAllBooks = exports.deleteBook = exports.updateBook = exports.getAllBooks = exports.getOneBook = exports.addNewBook = void 0;
const book_1 = __importDefault(require("../models/book"));
const addNewBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { ratings } = _a, bookData = __rest(_a, ["ratings"]);
        if (ratings &&
            (!Array.isArray(ratings) ||
                !ratings.every((r) => typeof r === "number"))) {
            res.status(400).json({ message: "Ratings must be an array of numbers" });
            return;
        }
        const newBook = new book_1.default(Object.assign(Object.assign({}, bookData), { ratings: ratings || [] }));
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
        // Calculate average rating
        const averageRating = fetchedBook.ratings && fetchedBook.ratings.length > 0
            ? fetchedBook.ratings.reduce((a, b) => a + b, 0) /
                fetchedBook.ratings.length
            : 0;
        res.status(200).json(Object.assign(Object.assign({}, fetchedBook.toObject()), { averageRating }));
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getOneBook = getOneBook;
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.find();
        // Add average rating to each book
        const booksWithRatings = books.map((book) => {
            const averageRating = book.ratings && book.ratings.length > 0
                ? book.ratings.reduce((a, b) => a + b, 0) / book.ratings.length
                : 0;
            return Object.assign(Object.assign({}, book.toObject()), { averageRating });
        });
        res.status(200).json(booksWithRatings);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getAllBooks = getAllBooks;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _a = req.body, { ratings } = _a, updateData = __rest(_a, ["ratings"]);
        if (ratings &&
            (!Array.isArray(ratings) ||
                !ratings.every((r) => typeof r === "number"))) {
            res.status(400).json({ message: "Ratings must be an array of numbers" });
            return;
        }
        const updatedBook = yield book_1.default.findByIdAndUpdate(req.params.id, Object.assign(Object.assign({}, updateData), (ratings ? { ratings } : {})), {
            new: true,
            runValidators: true,
        });
        if (!updatedBook) {
            res.status(404).json({ message: "Update failed" });
            return;
        }
        res.status(200).json(updatedBook);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBook = yield book_1.default.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            res.status(404).json({ message: "Could not delete" });
            return;
        }
        res.status(200).json({ message: "Successfully deleted the book" });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteBook = deleteBook;
const deleteAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_1.default.deleteMany({});
        if (result.deletedCount === 0) {
            res.status(404).json({ message: "No books found to delete" });
            return;
        }
        res
            .status(200)
            .json({ message: `${result.deletedCount} books successfully deleted` });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteAllBooks = deleteAllBooks;
const addRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rating } = req.body;
        if (typeof rating !== "number" || rating < 0 || rating > 5) {
            res
                .status(400)
                .json({ message: "Rating must be a number between 0 and 5" });
            return;
        }
        const book = yield book_1.default.findById(req.params.id);
        if (!book) {
            res.status(404).json({ message: "Book not found" });
            return;
        }
        if (!book.ratings) {
            book.ratings = [];
        }
        book.ratings.push(rating);
        yield book.save();
        res.status(200).json({ message: "Rating added successfully", book });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.addRating = addRating;
