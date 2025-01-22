"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    author: {
        firstname: { type: String, required: true },
        middlename: { type: String, required: false },
        lastname: { type: String, required: false },
    },
    price: { type: Number, required: true },
    genre: { type: String, required: true },
    publisher: { type: String, required: true },
    isbn: { type: Number, required: true },
    publish_date: { type: Date, required: true },
    views: { type: Number, required: true },
    inStock: { type: Number, required: true },
    ratings: {
        type: [Number],
        required: false,
        default: [],
    },
}, {
    timestamps: true,
});
BookSchema.methods.getAverageRating = function () {
    if (this.ratings.length === 0)
        return 0;
    return (this.ratings.reduce((acc, val) => acc + val, 0) /
        this.ratings.length);
};
const BookModel = (0, mongoose_1.model)("Book", BookSchema);
exports.default = BookModel;
