import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookForm from "./pages/BookForm";
import BookList from "./pages/BookList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main className="p-6">
          <Routes>
            <Route path="/books" element={<BookList />} />
            <Route path="/add-book" element={<BookForm />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
