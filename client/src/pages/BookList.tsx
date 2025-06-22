import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../Interfaces/iBook";
import { FaEdit, FaTrash } from "react-icons/fa";
import BookFormModal from "../components/BookFormModal";

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [deleteTarget, setDeleteTarget] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [editTarget, setEditTarget] = useState<Book | null>(null);

  const fetchBooks = async () => {
    try {
      const response = await axios.get<Book[]>("http://localhost:3000/books/");
      setBooks(response.data);
    } catch (err) {
      console.error("Failed to fetch books", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (updated: Book) => {
    try {
      const res = await axios.put<Book>(
        `http://localhost:3000/books/update/${updated._id}`,
        updated
      );
      setBooks((prev) =>
        prev.map((b) => (b._id === updated._id ? res.data : b))
      );
      setEditTarget(null);
    } catch (err) {
      console.error("Failed to update book", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/books/delete/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
      setDeleteTarget(null);
    } catch (err) {
      console.error("Failed to delete book", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-10 text-gray-600">Loading books...</div>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Book List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 justify-items-center">
        {books.map((book) => (
          <div
            key={book._id}
            className="bg-white shadow-md rounded-lg p-4 w-64 relative"
          >
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-80 object-cover object-top rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold mb-1">{book.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{book.genre}</p>
            <p className="text-sm text-gray-600">
              <strong>Author:</strong> {book.author.firstname}{" "}
              {book.author.lastname}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Price:</strong> ${book.price}
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <button
                className="text-blue-600 hover:text-blue-800"
                onClick={() => alert("Update functionality not implemented")}
              >
                <FaEdit />
              </button>
              <button
                className="text-blue-600 hover:text-blue-800"
                onClick={() => setEditTarget(book)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => setDeleteTarget(book)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p className="mb-4">
              Are you sure you want to delete{" "}
              <strong>{deleteTarget.name}</strong>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setDeleteTarget(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => handleDelete(deleteTarget._id!)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {editTarget && (
        <BookFormModal
          book={editTarget}
          onClose={() => setEditTarget(null)}
          onSubmit={handleUpdate}
        />
      )}
    </div>
  );
}
