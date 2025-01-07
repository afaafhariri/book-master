import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoRoot from "./pages/NoRoot";
import Comedy from "./pages/Comedy";
import Concerts from "./pages/Concert";
import Drama from "./pages/Drama";
import Talks from "./pages/Talks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NoRoot />}></Route>
          <Route path="/comedy" element={<Comedy />}></Route>
          <Route path="/concerts" element={<Concerts />}></Route>
          <Route path="/drama" element={<Drama />}></Route>
          <Route path="/talks" element={<Talks />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
