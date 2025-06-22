import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookForm from "./pages/BookForm";
import BookList from "./pages/BookList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />}></Route>
          <Route path="/add" element={<BookForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
