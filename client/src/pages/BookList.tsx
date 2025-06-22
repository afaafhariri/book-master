// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaPlus } from "react-icons/fa";
// import BookCard from "../components/BookCard";
// import BookFormModal from "../components/BookFormModal";
// import type { Book } from "../Interfaces/iBook";

// export default function BookList() {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedBook, setSelectedBook] = useState<Book | null>(null);

//   const API_URL = "http://localhost:3000/books";

//   const fetchBooks = async () => {
//     try {
//       const res = await axios.get(API_URL);
//       setBooks(res.data as Book[]);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const handleDelete = async (id: string) => {
//     try {
//       console.log("Deleting book with ID:", id);
//       await axios.delete(`${API_URL}/${id}`);
//       setBooks((prev) => prev.filter((book) => book._id !== id));
//     } catch (error) {
//       console.error("Failed to delete book:", error);
//     }
//   };

//   const handleFormSubmit = async (formData: Book) => {
//     try {
//       if (formData._id) {
//         console.log("Updating book:", formData);
//         await axios.put(`${API_URL}/${formData._id}`, formData);
//       } else {
//         console.log("Adding new book:", formData);
//         await axios.post(API_URL, formData);
//       }
//       setShowForm(false);
//       setSelectedBook(null);
//       fetchBooks();
//     } catch (error) {
//       console.error("Failed to submit form:", error);
//     }
//   };

//   const openForm = (book?: Book) => {
//     setSelectedBook(book || null);
//     setShowForm(true);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Books List</h1>
//       <button
//         onClick={() => openForm()}
//         className="bg-green-500 text-white px-4 py-2 rounded-xl mb-4 flex items-center gap-2"
//       >
//         <FaPlus /> Add New Book
//       </button>

//       {loading ? (
//         <p>Loading books...</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {books.map((book) => (
//             <BookCard
//               key={book._id}
//               book={book}
//               onEdit={() => openForm(book)}
//               onDelete={() => handleDelete(book._id!)}
//             />
//           ))}
//         </div>
//       )}

//       {showForm && (
//         <BookFormModal
//           book={selectedBook}
//           onClose={() => {
//             setShowForm(false);
//             setSelectedBook(null);
//           }}
//           onSubmit={handleFormSubmit}
//         />
//       )}
//     </div>
//   );
// }
