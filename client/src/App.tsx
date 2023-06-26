import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { QuestionsProps } from "../src/pages/Home/Home";
import "./App.css";
import Home from "./pages/Home/Home";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Detail from "./pages/Detail/Detail";
import QuestionEdit from "./pages/QuestionEdit/QuestionEdit";
import AnswerEdit from "./pages/AnswerEdit/AnswerEdit";
import Login from "./pages/Login/LoginPage";
import SignUp from "./pages/SignUp/SignUpPage";
import Header from "./layout/Header/Header";
import SideBar from "./layout/SideBar/SideBar";
import Footer from "./layout/Footer/Footer";
import Search from "./pages/Search/Search";

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState<QuestionsProps[]>([]);

  const handleSearch = () => {
    axios
      .get(`/api/search?page=0&keyword=${search}`)
      .then((res) => setData(res.data));
    navigate(`/questions/${search}`);
  };

  console.log("search", search);

  return (
    <>
      <Header
        handleSearch={handleSearch}
        setSearch={setSearch}
        search={search}
      />
      <SideBar />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path="/questions/:id" element={<Detail />} />
          <Route path="/questions/:id/edit" element={<QuestionEdit />} />
          <Route path="/questions/:qid/:id" element={<AnswerEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/questions/:keyword" element={<Search data={data} />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
