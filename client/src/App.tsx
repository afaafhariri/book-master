import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
