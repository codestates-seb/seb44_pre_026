import QuestionBody from "../../components/QuestionBody/QuestionBody";
import QuestionNotice from "../../components/QuestionNotice/QuestionNotice";
import QuestionTitle from "../../components/QuestionTitle/QuestionTitle";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./style";
import useInput from "../../hooks/useInput";
import axios from "axios";

// TODO: 텍스트 에디터 focus
// TODO: focus 대상만 Tip 노출되도록 조건 걸기

function AskQuestion() {
  const [titleValue, changeTitleHandler, titleReset] = useInput("");
  const [bodyValue, changeBodyHandler, bodyReset] = useInput("");

  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("/api/questions", {
        title: titleValue,
        content: bodyValue,
        memberId: 1,
      })
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
          />
          <QuestionBody
            changeHandler={changeBodyHandler}
            bodyValue={bodyValue}
          />
          <S.ButtonLayout>
            <button type="submit">Post your question</button>
            <Link to="/questions">
              <button>Discard draft</button>
            </Link>
          </S.ButtonLayout>
        </S.FormLayout>
      </S.QuestionLayout>
    </S.Section>
  );
}

export default AskQuestion;
