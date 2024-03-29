import QuestionBody from "../../components/QuestionBody/QuestionBody";
import QuestionNotice from "../../components/QuestionNotice/QuestionNotice";
import QuestionTitle from "../../components/QuestionTitle/QuestionTitle";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useState } from "react";
import { ACCESS_TOKEN, BASE_URL } from "../../constants/constants";

// TODO: 하드코딩된 focus 로직 수정

function AskQuestion() {
  const [titleValue, changeTitleHandler, titleReset] = useInput("");
  const [bodyValue, changeBodyHandler, bodyReset] = useInput("");
  const [focusing, setFocusing] = useState("title");

  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem(ACCESS_TOKEN);

    axios
      .post(
        BASE_URL + "/questions",
        {
          title: titleValue,
          content: bodyValue,
          memberId: 1,
        },
        {
          headers: {
            Authorization: token,
            withCredentials: true,
          },
        }
      )
      .then(res => {
        navigate(`/questions/${res.data.questionId}`);
      });

    titleReset();
    bodyReset();
  };

  return (
    <S.Section>
      <S.QuestionLayout>
        <S.Header>
          <S.QuestionTitle>Ask a public question</S.QuestionTitle>
          <S.TitleImage />
        </S.Header>
        <QuestionNotice />
        <S.FormLayout onSubmit={e => submitHandler(e)}>
          <QuestionTitle
            changeHandler={changeTitleHandler}
            titleValue={titleValue}
            focusing={focusing}
            setFocusing={setFocusing}
          />
          <QuestionBody
            changeHandler={changeBodyHandler}
            bodyValue={bodyValue}
            focusing={focusing}
            setFocusing={setFocusing}
          />
          <S.ButtonLayout>
            <button type="submit">Post your question</button>
            <Link to="/">
              <button>Discard draft</button>
            </Link>
          </S.ButtonLayout>
        </S.FormLayout>
      </S.QuestionLayout>
    </S.Section>
  );
}

export default AskQuestion;
