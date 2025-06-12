import { FaStar, FaTrash, FaEdit } from "react-icons/fa";
import type { Book } from "../Interfaces/BookI";

interface Props {
  book: Book;
  onEdit: () => void;
  onDelete: () => void;
}

export default function BookCard({ book, onEdit, onDelete }: Props) {
  return (
    <div className="border rounded-2xl shadow-md p-4 flex flex-col">
      <img
        src={book.image}
        alt={book.name}
        className="rounded-xl mb-2 h-48 object-cover"
      />
      <h2 className="text-xl font-semibold">{book.name}</h2>
      <p className="text-sm italic">
        by {book.author.firstname} {book.author.lastname}
      </p>
      <p className="text-sm mt-1 mb-2 text-gray-600">
        Genre: {book.genre} | Price: ${book.price}
      </p>
      <div className="flex items-center gap-1 mb-2">
        <FaStar className="text-yellow-500" />
        <span>{book.averageRating?.toFixed(2) ?? 0}</span>
      </div>
      <div className="flex gap-2 mt-auto">
        <button className="text-red-600 hover:text-red-800" onClick={onDelete}>
          <FaTrash />
        </button>
        <button className="text-blue-600 hover:text-blue-800" onClick={onEdit}>
          <FaEdit />
        </button>
      </div>
    </div>
  );
}
