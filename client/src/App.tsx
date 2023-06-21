import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Detail from "./pages/Detail/Detail";
import QuestionEdit from "./pages/QuestionEdit/QuestionEdit";
import AnswerEdit from "./pages/AnswerEdit/AnswerEdit";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/questions/ask" element={<AskQuestion />} />
        <Route path="/questions/:id" element={<Detail />} />
        <Route path="/questions/:id/edit" element={<QuestionEdit />} />
        <Route path="/questions/:qid/:id" element={<AnswerEdit />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
