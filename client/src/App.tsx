import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Detail from "./pages/Detail/Detail";
import QuestionEdit from "./pages/QuestionEdit/QuestionEdit";
import AnswerEdit from "./pages/AnswerEdit/AnswerEdit";
import Login from "./pages/Login/LoginPage";
import Layout from "./layout/Layout";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions/ask" element={<AskQuestion />} />
            <Route path="/questions/:id" element={<Detail />} />
            <Route path="/questions/:id/edit" element={<QuestionEdit />} />
            <Route path="/questions/:qid/:id" element={<AnswerEdit />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
