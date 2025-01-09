import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoRoot from "./pages/NoRoot";
import Romance from "./pages/Romance";
import Mystery from "./pages/Mystery";
import SciFi from "./pages/SciFi";
import Adventure from "./pages/Adventure";
import Crime from "./pages/Crime";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NoRoot />}></Route>
          <Route path="/romance" element={<Romance />}></Route>
          <Route path="/mystery" element={<Mystery />}></Route>
          <Route path="/sci-fi" element={<SciFi />}></Route>
          <Route path="/adventure" element={<Adventure />}></Route>
          <Route path="/crime" element={<Crime />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
