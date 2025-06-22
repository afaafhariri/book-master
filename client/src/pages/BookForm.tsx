import { useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import type { Book } from "../Interfaces/iBook";
import type { Author } from "../Interfaces/iAuthor";

const initialState: Book = {
  name: "",
  description: "",
  image: "",
  author: {
    firstname: "",
    middlename: "",
    lastname: "",
  },
  price: 0,
  genre: "",
  publisher: "",
  isbn: 0,
  publish_date: "",
  views: 0,
  inStock: 0,
  ratings: [],
};

export default function BookForm() {
  const [formData, setFormData] = useState<Book>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("author.")) {
      const key = name.split(".")[1] as keyof Author;
      setFormData((prev) => ({
        ...prev,
        author: {
          ...prev.author,
          [key]: value,
        },
      }));
    } else if (["price", "isbn", "views", "inStock"].includes(name)) {
      setFormData({ ...formData, [name]: Number(value) });
    } else if (name === "ratings") {
      setFormData({ ...formData, ratings: value.split(",").map(Number) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/books", formData);
      alert("Book added successfully!");
      setFormData(initialState);
    } catch (err: any) {
      console.error("Error:", err.response?.data || err.message);
      alert("Error adding book");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 text-gray-800">
          <FaPlus /> Add New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Book Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Book Name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              name="image"
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              name="genre"
              type="text"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              name="publisher"
              type="text"
              placeholder="Publisher"
              value={formData.publisher}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="input"
            rows={3}
          />

          {/* Author Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Author Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                name="author.firstname"
                type="text"
                placeholder="First Name"
                value={formData.author.firstname}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                name="author.middlename"
                type="text"
                placeholder="Middle Name"
                value={formData.author.middlename}
                onChange={handleChange}
                className="input"
              />
              <input
                name="author.lastname"
                type="text"
                placeholder="Last Name"
                value={formData.author.lastname}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          {/* Numeric Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="price"
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              name="isbn"
              type="number"
              placeholder="ISBN"
              value={formData.isbn}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              name="publish_date"
              type="date"
              value={formData.publish_date}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="views"
              type="number"
              placeholder="Views"
              value={formData.views}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              name="inStock"
              type="number"
              placeholder="In Stock"
              value={formData.inStock}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          {/* Ratings */}
          <input
            name="ratings"
            type="text"
            placeholder="Ratings (comma separated)"
            onChange={handleChange}
            className="input"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit Book
          </button>
        </form>
      </div>
    </div>
  );
}
