import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions/ask" element={<AskQuestion />} />
        <Route path="/questions/1" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
