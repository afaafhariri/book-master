import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import type { Book } from "../Interfaces/iBook";

interface Props {
  book: Book | null;
  onClose: () => void;
  onSubmit: (book: Book) => void;
}

export default function BookFormModal({ book, onClose, onSubmit }: Props) {
  const [formData, setFormData] = useState<Book>({
    name: "",
    description: "",
    image: "",
    author: { firstname: "", lastname: "" },
    price: 0,
    genre: "",
    publisher: "",
    isbn: 0,
    publish_date: "",
    views: 0,
    inStock: 0,
    ratings: [],
  });

  useEffect(() => {
    if (book) setFormData(book);
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("author.")) {
      const key = name.split(".")[1];
      setFormData({
        ...formData,
        author: { ...formData.author, [key]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-4">
          {book ? "Edit Book" : "Add New Book"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Book Name"
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="author.firstname"
            value={formData.author.firstname}
            onChange={handleChange}
            placeholder="Author Firstname"
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="author.lastname"
            value={formData.author.lastname || ""}
            onChange={handleChange}
            placeholder="Author Lastname"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Genre"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            placeholder="Publisher"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            placeholder="ISBN"
            className="p-2 border rounded"
          />
          <input
            type="date"
            name="publish_date"
            value={formData.publish_date}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="views"
            value={formData.views}
            onChange={handleChange}
            placeholder="Views"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="inStock"
            value={formData.inStock}
            onChange={handleChange}
            placeholder="In Stock"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="p-2 border rounded col-span-2"
          />
          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white py-2 rounded-xl"
          >
            {book ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
}
