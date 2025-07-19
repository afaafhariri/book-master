import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Book } from "../Interfaces/book";
import Modal from "./modal";
import FormField from "./form-field";
import Button from "./button";

interface BookFormProps {
  isOpen: boolean;
  initialData?: Book;
  onSave: (data: Book) => void;
  onClose: () => void;
}

const BookForm: React.FC<BookFormProps> = ({
  isOpen,
  initialData,
  onSave,
  onClose,
}) => {
  const [form, setForm] = useState<Book>({
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
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setForm((prev) => ({
        ...prev,
        [name]:
          name === "price" ||
          name === "isbn" ||
          name === "views" ||
          name === "inStock"
            ? Number(value)
            : value,
      }));
    } else {
      const [parent, child] = keys;
      if (parent === "author") {
        setForm((prev) => ({
          ...prev,
          author: { ...prev.author, [child]: value },
        }));
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? "Edit Book" : "Add Book"}
      </h2>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <FormField
          label="Description"
          name="description"
          value={form.description || ""}
          onChange={handleChange}
          textarea
        />
        <FormField
          label="Image URL"
          name="image"
          value={form.image}
          onChange={handleChange}
        />
        <FormField
          label="Author Firstname"
          name="author.firstname"
          value={form.author.firstname}
          onChange={handleChange}
        />
        <FormField
          label="Author Lastname"
          name="author.lastname"
          value={form.author.lastname || ""}
          onChange={handleChange}
        />
        <FormField
          label="Price"
          name="price"
          value={form.price}
          onChange={handleChange}
          type="number"
        />
        <FormField
          label="Genre"
          name="genre"
          value={form.genre}
          onChange={handleChange}
        />
        <FormField
          label="Publisher"
          name="publisher"
          value={form.publisher}
          onChange={handleChange}
        />
        <FormField
          label="ISBN"
          name="isbn"
          value={form.isbn}
          onChange={handleChange}
          type="number"
        />
        <FormField
          label="Publish Date"
          name="publish_date"
          value={form.publish_date}
          onChange={handleChange}
          type="date"
        />
        <FormField
          label="Views"
          name="views"
          value={form.views}
          onChange={handleChange}
          type="number"
        />
        <FormField
          label="In Stock"
          name="inStock"
          value={form.inStock}
          onChange={handleChange}
          type="number"
        />
        <div className="flex justify-end space-x-2">
          <Button variant="secondary" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default BookForm;
