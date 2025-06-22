import { useState, useEffect } from "react";
import { Book } from "../Interfaces/iBook";
import { FaTimes } from "react-icons/fa";

interface Props {
  book: Book | null;
  onClose: () => void;
  onSubmit: (updated: Book) => void;
}

export default function BookFormModal({ book, onClose, onSubmit }: Props) {
  const [formData, setFormData] = useState<Book | null>(null);

  useEffect(() => {
    if (book) setFormData(book);
  }, [book]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (formData) {
      if (name.startsWith("author.")) {
        const key = name.split(".")[1];
        setFormData({
          ...formData,
          author: {
            ...formData.author,
            [key]: value,
          },
        });
      } else if (["price", "isbn", "views", "inStock"].includes(name)) {
        setFormData({ ...formData, [name]: Number(value) });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const handleSubmit = () => {
    if (formData) onSubmit(formData);
  };

  if (!formData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <h2 className="text-xl font-bold mb-4">Update Book</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input"
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="input"
          />
          <input
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Genre"
            className="input"
          />
          <input
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            placeholder="Publisher"
            className="input"
          />
          <input
            name="price"
            value={formData.price}
            type="number"
            onChange={handleChange}
            placeholder="Price"
            className="input"
          />
          <input
            name="isbn"
            value={formData.isbn}
            type="number"
            onChange={handleChange}
            placeholder="ISBN"
            className="input"
          />
          <input
            name="views"
            value={formData.views}
            type="number"
            onChange={handleChange}
            placeholder="Views"
            className="input"
          />
          <input
            name="inStock"
            value={formData.inStock}
            type="number"
            onChange={handleChange}
            placeholder="In Stock"
            className="input"
          />
          <input
            name="publish_date"
            value={formData.publish_date.toString().slice(0, 10)}
            type="date"
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <input
            name="author.firstname"
            value={formData.author.firstname}
            onChange={handleChange}
            placeholder="Author First Name"
            className="input"
          />
          <input
            name="author.middlename"
            value={formData.author.middlename || ""}
            onChange={handleChange}
            placeholder="Author Middle Name"
            className="input"
          />
          <input
            name="author.lastname"
            value={formData.author.lastname || ""}
            onChange={handleChange}
            placeholder="Author Last Name"
            className="input"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
