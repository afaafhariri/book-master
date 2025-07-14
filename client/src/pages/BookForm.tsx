import { useState } from "react";
import {
  FaPlus,
  FaBook,
  FaUser,
  FaDollarSign,
  FaCalendar,
  FaEye,
  FaWarehouse,
  FaStar,
} from "react-icons/fa";
import { Book } from "../Interfaces/iBook";
import { Author } from "../Interfaces/iAuthor";
import axios from "axios";

const initialState: Book = {
  _id: "",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ratingsInput, setRatingsInput] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
      setFormData({ ...formData, [name]: Number(value) || 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRatingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRatingsInput(value);

    // Convert comma-separated values to numbers, filtering out invalid ones
    const ratingsArray = value
      .split(",")
      .map((r) => r.trim())
      .filter((r) => r !== "")
      .map((r) => Number(r))
      .filter((r) => !isNaN(r) && r >= 1 && r <= 5);

    setFormData({ ...formData, ratings: ratingsArray });
  };

  const handleError = (err: unknown) => {
    console.error("Error:", err);

    // More detailed error handling
    if (err && typeof err === "object" && "response" in err) {
      type AxiosErrorType = {
        response?: { data?: { message?: string } };
        message?: string;
      };
      const axiosError = err as AxiosErrorType;
      const message =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Something went wrong.";
      alert(`Error: ${message}`);
    } else if (err instanceof Error) {
      alert(`Error: ${err.message}`);
    } else {
      alert("Unexpected error occurred.");
    }
  };

  const validateForm = () => {
    const required = [
      { field: formData.name, name: "Book Name" },
      { field: formData.description, name: "Description" },
      { field: formData.image, name: "Image URL" },
      { field: formData.author.firstname, name: "Author First Name" },
      { field: formData.author.lastname, name: "Author Last Name" },
      { field: formData.genre, name: "Genre" },
      { field: formData.publisher, name: "Publisher" },
      { field: formData.publish_date, name: "Publish Date" },
    ];

    for (const item of required) {
      if (!item.field || item.field.toString().trim() === "") {
        alert(`${item.name} is required.`);
        return false;
      }
    }

    if (formData.price <= 0) {
      alert("Price must be greater than 0.");
      return false;
    }

    if (formData.isbn <= 0) {
      alert("ISBN must be a valid number.");
      return false;
    }

    if (formData.inStock < 0) {
      alert("Stock quantity cannot be negative.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      console.log("Submitting to:", "http://localhost:3000/books/addbook");
      console.log("Form data:", formData);

      const response = await axios.post(
        "http://localhost:3000/books/addbook",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Server response:", response.data);

      alert("Book added successfully!");
      setFormData(initialState);
      setRatingsInput("");
    } catch (err) {
      handleError(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <FaPlus className="text-2xl" />
              Add New Book
            </h1>
            <p className="text-blue-100 mt-2">
              Fill in the details to add a new book to your collection
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-8">
            {/* Book Information Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaBook className="text-blue-600" />
                Book Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Book Name *</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter book name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Genre *</label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Biography">Biography</option>
                    <option value="History">History</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Publisher *</label>
                  <input
                    name="publisher"
                    type="text"
                    placeholder="Enter publisher name"
                    value={formData.publisher}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Cover Image URL *</label>
                  <input
                    name="image"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    value={formData.image}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className={labelClass}>Description *</label>
                <textarea
                  name="description"
                  placeholder="Enter book description"
                  value={formData.description}
                  onChange={handleChange}
                  className={inputClass}
                  rows={4}
                />
              </div>
            </div>

            {/* Author Information Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaUser className="text-green-600" />
                Author Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input
                    name="author.firstname"
                    type="text"
                    placeholder="First name"
                    value={formData.author.firstname}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Middle Name</label>
                  <input
                    name="author.middlename"
                    type="text"
                    placeholder="Middle name (optional)"
                    value={formData.author.middlename}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input
                    name="author.lastname"
                    type="text"
                    placeholder="Last name"
                    value={formData.author.lastname}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Publishing Details Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaCalendar className="text-purple-600" />
                Publishing Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>Price ($) *</label>
                  <div className="relative">
                    <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      value={formData.price || ""}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>ISBN *</label>
                  <input
                    name="isbn"
                    type="number"
                    placeholder="ISBN number"
                    value={formData.isbn || ""}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Publish Date *</label>
                  <input
                    name="publish_date"
                    type="date"
                    value={formData.publish_date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            {/* Inventory & Stats Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FaWarehouse className="text-orange-600" />
                Inventory & Statistics
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>In Stock</label>
                  <input
                    name="inStock"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={formData.inStock || ""}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Views</label>
                  <div className="relative">
                    <FaEye className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="views"
                      type="number"
                      min="0"
                      placeholder="0"
                      value={formData.views || ""}
                      onChange={handleChange}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Ratings (1-5, comma separated)
                  </label>
                  <div className="relative">
                    <FaStar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="ratings"
                      type="text"
                      placeholder="4.5, 5, 3.5, 4"
                      value={ratingsInput}
                      onChange={handleRatingsChange}
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Enter ratings separated by commas (e.g., 4.5, 5, 3.5, 4)
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 flex items-center justify-center gap-3 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <FaPlus />
                    Add Book to Collection
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
