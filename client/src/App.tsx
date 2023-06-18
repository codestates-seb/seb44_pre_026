import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Detail from "./pages/Detail/Detail";
import QuestionEdit from "./pages/QuestionEdit/QuestionEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions/ask" element={<AskQuestion />} />
        <Route path="/questions/1" element={<Detail />} />
        <Route path="/questions/1/edit" element={<QuestionEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
