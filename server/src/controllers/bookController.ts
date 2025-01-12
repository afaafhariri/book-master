import { Request, Response } from "express";
import BookModel from "../models/book";

export const addNewBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newBook = new BookModel(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
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
    res.status(200).json(fetchedBook);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllBooks = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fetchingAllBooks = await BookModel.find();
    res.status(200).json(fetchingAllBooks);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updateBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateBook) {
      res.status(404).json({ message: "Update failed" });
      return;
    }
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deleteBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const deleteBook = await BookModel.findByIdAndDelete(req.params.id);
    if (!deleteBook) {
      res.status(40).json({ message: "Could not delete" });
      return;
    }
    res.status(200).json({ message: "Successfully deleted the book" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
