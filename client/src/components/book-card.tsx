import React from "react";
import { Book } from "../Interfaces/book";
import { Eye, Edit3, Trash2 } from "lucide-react";
import Button from "./button";

interface BookCardProps {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
  onView: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({
  book,
  onEdit,
  onDelete,
  onView,
}) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
    <img
      src={book.image}
      alt={book.name}
      className="h-40 w-full object-cover rounded-lg mb-4"
    />
    <h3 className="text-lg font-semibold mb-1">{book.name}</h3>
    <p className="text-sm text-gray-600 mb-2">
      {book.author.firstname} {book.author.lastname}
    </p>
    <p className="text-sm text-yellow-500 mb-4">
      ⭐ {book.averageRating?.toFixed(1) || "0.0"}
    </p>
    <div className="mt-auto flex space-x-2">
      <Button variant="secondary" onClick={() => onView(book)}>
        <Eye size={16} />
      </Button>
      <Button variant="primary" onClick={() => onEdit(book)}>
        <Edit3 size={16} />
      </Button>
      <Button variant="danger" onClick={() => onDelete(book)}>
        <Trash2 size={16} />
      </Button>
    </div>
  </div>
);

export default BookCard;
