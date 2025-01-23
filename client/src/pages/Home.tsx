import React, { useState, useEffect } from "react";
import axios from "axios";
import { BookI } from "../Interfaces/InterfaceBook";
import NavBar from "../components/NavBar";

const Home: React.FC = () => {
  const [books, setBooks] = useState<BookI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get<BookI[]>(
          "http://localhost:3333/books"
        );
        const fetchedBooks = response.data.map((book) => ({
          ...book,
          publish_date: new Date(book.publish_date),
        }));

        fetchedBooks.sort((a: BookI, b: BookI) => {
          return b.publish_date.getTime() - a.publish_date.getTime();
        });
        setBooks(fetchedBooks);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError("Failed to get latest books");
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <>
      <NavBar />
      <div className="py-8 px-40">
        <h2 className="text-blue-900 text-2xl font-semibold mb-4">Latest</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.slice(0, expanded ? books.length : 5).map((book) => (
            <div
              key={book._id}
              className="bg-white overflow-hidden p-4 hover:border border-gray-200 transition-all duration-300"
            >
              <img
                src={book.image}
                alt={book.name}
                className="w-full h-48 object-contain bg-gray-100"
              />
              <p className="font-semibold text-gray-800 mt-4 overflow-hidden whitespace-nowrap text-clip">
                {book.name}
              </p>
              <p className="text-sm text-gray-600">
                by {`${book.author.firstname} ${book.author.lastname || ""}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Published on: {book.publish_date.toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">Genre: {book.genre}</p>
              <p className="text-sm text-gray-500 mt-1">Price: ${book.price}</p>
              <p className="text-sm text-gray-500 mt-1">Views: {book.views}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center flex items-center justify-end">
          <button
            onClick={toggleExpanded}
            className="text-blue-900 font-medium text-sm px-4 py-2 border border-blue-900 hover:text-red-600 hover:border-red-600 transition-all duration-500"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
