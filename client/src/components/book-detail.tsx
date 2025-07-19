import React from "react";
import { Book } from "../Interfaces/book";
import Modal from "./modal";
import Button from "./button";

interface BookDetailProps {
  isOpen: boolean;
  book: Book;
  onClose: () => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ isOpen, book, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h2 className="text-xl font-semibold mb-4">{book.name}</h2>
    <div className="space-y-2">
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      <p>
        <strong>Author:</strong> {book.author.firstname} {book.author.lastname}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Publisher:</strong> {book.publisher}
      </p>
      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p>
        <strong>Published:</strong>{" "}
        {new Date(book.publish_date).toLocaleDateString()}
      </p>
      <p>
        <strong>Price:</strong> ${book.price}
      </p>
      <p>
        <strong>Views:</strong> {book.views}
      </p>
      <p>
        <strong>In Stock:</strong> {book.inStock}
      </p>
      <p>
        <strong>Average Rating:</strong> {book.averageRating?.toFixed(1)}
      </p>
    </div>
    <div className="mt-6 flex justify-end">
      <Button variant="primary" onClick={onClose}>
        Close
      </Button>
    </div>
  </Modal>
);

export default BookDetail;
