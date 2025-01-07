import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoRoot from "./pages/NoRoot";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NoRoot />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
