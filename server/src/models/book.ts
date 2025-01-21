import { Schema, Document, model } from "mongoose";

interface Book extends Document {
  name: string;
  description?: string;
  author: {
    firstname: string;
    middlename?: string;
    lastname?: string;
  };
  price: number;
  genre: string;
  publisher: string;
  isbn: number;
  publish_date: Date;
  views: number;
  inStock: number;
}

const BookSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const BookModel = model<Book>("Book", BookSchema);
export default BookModel;
