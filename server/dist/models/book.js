"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    author: {
        firstname: { type: String, required: true },
        middlename: { type: String, required: false },
        lastname: { type: String, required: false },
    },
    price: { type: Number, required: true },
    genre: { type: String, required: true },
    publisher: { type: String, required: true },
    isbn: { type: Number, required: true },
    year: { type: Number, required: true },
    views: { type: Number, required: true },
    inStock: { type: Number, required: true },
}, {
    timestamps: true,
});
const BookModel = (0, mongoose_1.model)("Book", BookSchema);
exports.default = BookModel;
