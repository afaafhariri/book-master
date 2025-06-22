import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookForm from "./pages/BookForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
