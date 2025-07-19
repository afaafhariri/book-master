// src/pages/LandingPage.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "../Interfaces/book";
import BookCard from "../components/book-card";
import BookForm from "../components/book-form";
import BookDetail from "../components/book-detail";
import ConfirmDialog from "../components/confirm-dialog";
import Button from "../components/button";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

type ModalType = "add" | "edit" | "view" | null;

const LandingPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await axios.get<Book[]>(`${API_URL}/books/`);
      setBooks(res.data);
    } catch (err) {
      console.error("Failed to fetch books", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAdd = async (book: Book) => {
    try {
      await axios.post(`${API_URL}/books/addbook`, book);
      await fetchBooks();
    } catch (err) {
      console.error("Failed to add book", err);
    } finally {
      setModalType(null);
    }
  };

  const handleEditInit = (book: Book) => {
    setSelectedBook(book);
    setModalType("edit");
  };

  const handleEditSave = async (book: Book) => {
    if (!book._id) return;
    try {
      await axios.put(`${API_URL}/books/update/${book._id}`, book);
      await fetchBooks();
    } catch (err) {
      console.error("Failed to update book", err);
    } finally {
      setModalType(null);
    }
  };

  const handleView = (book: Book) => {
    setSelectedBook(book);
    setModalType("view");
  };

  const handleDeleteInit = (book: Book) => {
    setBookToDelete(book);
  };

  const handleDeleteConfirm = async () => {
    if (!bookToDelete?._id) return;
    try {
      await axios.delete(`${API_URL}/books/delete/${bookToDelete._id}`);
      await fetchBooks();
    } catch (err) {
      console.error("Failed to delete book", err);
    } finally {
      setBookToDelete(null);
    }
  };

  const handleDeleteAllInit = () => {
    setConfirmDeleteAll(true);
  };

  const handleDeleteAllConfirm = async () => {
    try {
      await axios.delete(`${API_URL}/books/deletebooks`);
      await fetchBooks();
    } catch (err) {
      console.error("Failed to delete all books", err);
    } finally {
      setConfirmDeleteAll(false);
    }
  };

  return (
    <div className="p-8 relative">
      {/* Grid of books */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onEdit={handleEditInit}
            onDelete={handleDeleteInit}
            onView={handleView}
          />
        ))}
      </div>

      {/* Floating action buttons */}
      <Button
        className="fixed bottom-6 right-6"
        onClick={() => setModalType("add")}
      >
        Add Book+
      </Button>
      <Button
        variant="danger"
        className="fixed bottom-6 left-6"
        onClick={handleDeleteAllInit}
      >
        Delete All
      </Button>

      {/* Add / Edit Form */}
      <BookForm
        isOpen={modalType === "add" || modalType === "edit"}
        initialData={modalType === "edit" ? selectedBook! : undefined}
        onSave={modalType === "edit" ? handleEditSave : handleAdd}
        onClose={() => setModalType(null)}
      />

      {/* View Detail */}
      {selectedBook && (
        <BookDetail
          isOpen={modalType === "view"}
          book={selectedBook}
          onClose={() => setModalType(null)}
        />
      )}

      {/* Confirm delete single */}
      <ConfirmDialog
        isOpen={!!bookToDelete}
        message={`Delete "${bookToDelete?.name}"?`}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setBookToDelete(null)}
      />

      {/* Confirm delete all */}
      <ConfirmDialog
        isOpen={confirmDeleteAll}
        title="Delete All Books"
        message="Are you sure you want to delete ALL books?"
        onConfirm={handleDeleteAllConfirm}
        onCancel={() => setConfirmDeleteAll(false)}
      />
    </div>
  );
};

export default LandingPage;
