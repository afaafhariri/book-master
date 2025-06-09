import { Request, Response } from "express";
import BookModel from "../models/book";

export const addNewBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { ratings, ...bookData } = req.body;
    if (
      ratings &&
      (!Array.isArray(ratings) ||
        !ratings.every((r: number) => typeof r === "number"))
    ) {
      res.status(400).json({ message: "Ratings must be an array of numbers" });
      return;
    }
    const newBook = new BookModel({
      ...bookData,
      ratings: ratings || [],
    });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
    console.log(
      `Added new book: ${savedBook.name} by ${savedBook.author.firstname} ${savedBook.author.lastname}`
    );
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getOneBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fetchedBook = await BookModel.findById(req.params.id);
    if (!fetchedBook) {
      res.status(404).json({ message: "Cannot find such a book" });
      return;
    }
    const averageRating =
      fetchedBook.ratings && fetchedBook.ratings.length > 0
        ? fetchedBook.ratings.reduce((a, b) => a + b, 0) /
          fetchedBook.ratings.length
        : 0;
    res.status(200).json({ ...fetchedBook.toObject(), averageRating });
    console.log(
      `Fetched book: ${fetchedBook.name} by ${fetchedBook.author.firstname} ${fetchedBook.author.lastname}`
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const books = await BookModel.find();
    const booksWithRatings = books.map((book) => {
      const averageRating =
        book.ratings && book.ratings.length > 0
          ? book.ratings.reduce((a, b) => a + b, 0) / book.ratings.length
          : 0;

      return { ...book.toObject(), averageRating };
    });
    res.status(200).json(booksWithRatings);
    console.log(`Fetched ${books.length} books`);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { ratings, ...updateData } = req.body;
    if (
      ratings &&
      (!Array.isArray(ratings) ||
        !ratings.every((r: number) => typeof r === "number"))
    ) {
      res.status(400).json({ message: "Ratings must be an array of numbers" });
      return;
    }
    const updatedBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      { ...updateData, ...(ratings ? { ratings } : {}) },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedBook) {
      res.status(404).json({ message: "Update failed" });
      return;
    }
    res.status(200).json(updatedBook);
    console.log(
      `Updated book: ${updatedBook.name} by ${updatedBook.author.firstname} ${updatedBook.author.lastname}`
    );
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deletedBook = await BookModel.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      res.status(404).json({ message: "Could not delete" });
      return;
    }
    res.status(200).json({ message: "Successfully deleted the book" });
    console.log(
      `Deleted book: ${deletedBook.name} by ${deletedBook.author.firstname} ${deletedBook.author.lastname}`
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await BookModel.deleteMany({});
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "No books found to delete" });
      return;
    }
    res
      .status(200)
      .json({ message: `${result.deletedCount} books successfully deleted` });
    console.log(`${result.deletedCount} books deleted successfully`);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const addRating = async (req: Request, res: Response): Promise<void> => {
  try {
    const { rating } = req.body;
    if (typeof rating !== "number" || rating < 0 || rating > 5) {
      res
        .status(400)
        .json({ message: "Rating must be a number between 0 and 5" });
      return;
    }
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    if (!book.ratings) {
      book.ratings = [];
    }
    book.ratings.push(rating);
    await book.save();
    res.status(200).json({ message: "Rating added successfully", book });
    console.log(`Added rating to book: ${book.name}`);
    console.log(
      `New average rating: ${
        book.ratings.reduce((a, b) => a + b, 0) / book.ratings.length
      }`
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};
