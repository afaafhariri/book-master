import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookForm from "./pages/BookForm";
import BookList from "./pages/BookList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add-book" element={<BookForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
