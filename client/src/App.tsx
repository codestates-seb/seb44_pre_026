import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home/Home";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import Detail, { DetailProps } from "./pages/Detail/Detail";
import QuestionEdit from "./pages/QuestionEdit/QuestionEdit";
import AnswerEdit from "./pages/AnswerEdit/AnswerEdit";
import Login from "./pages/Login/LoginPage";
import SignUp from "./pages/SignUp/SignUpPage";
import Header from "./layout/Header/Header";
import SideBar from "./layout/SideBar/SideBar";
import Footer from "./layout/Footer/Footer";
import Search from "./pages/Search/Search";
import { ACCESS_TOKEN, BASE_URL } from "./constants/constants";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState<DetailProps[]>([]);

  const token = localStorage.getItem(ACCESS_TOKEN);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .get(BASE_URL + `/questions/search?page=1&keyword=${search}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => setData(res.data.data));
    navigate(`/questions/search/${search}`);
    setSearch("");
  };

  return (
    <>
      <Header
        handleSearch={handleSearch}
        setSearch={setSearch}
        search={search}
      />
      <SideBar />
      <div className="contents">
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions/ask" element={<AskQuestion />} />
          <Route path="/questions/:id" element={<Detail />} />
          <Route path="/questions/:id/edit" element={<QuestionEdit />} />
          <Route path="/questions/:qid/:id" element={<AnswerEdit />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/questions/search/:keyword"
            element={<Search data={data} />}
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
