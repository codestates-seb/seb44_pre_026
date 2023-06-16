import QuestionBody from "../components/QuestionBody/QuestionBody";
import QuestionNotice from "../components/QuestionNotice/QuestionNotice";
import QuestionTitle from "../components/QuestionTitle/QuestionTitle";

import * as S from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

// TODO: Submit API 통신
// TODO: 텍스트 에디터 focus
// TODO: focus 대상만 Tip 노출되도록 조건 걸기

function AskQuestion() {
  const [titleValue, setTitleValue] = useState<string>("");
  const [bodyValue, setBodyValue] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("titleValue = ", titleValue);
    console.log("bodyValue = ", bodyValue);
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
          <QuestionTitle setTitleValue={setTitleValue} />
          <QuestionBody setBodyValue={setBodyValue} />
          <S.ButtonLayout>
            <button type="submit">Post your question</button>
            {/* <Link to="/">
              <button>Discard draft</button>
            </Link> */}
          </S.ButtonLayout>
        </S.FormLayout>
      </S.QuestionLayout>
    </S.Section>
  );
}

export default AskQuestion;
