import QuestionBody from "../components/QuestionBody/QuestionBody";
import QuestionNotice from "../components/QuestionNotice/QuestionNotice";
import QuestionTitle from "../components/QuestionTitle/QuestionTitle";

import * as S from "./style";
import { useState } from "react";

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
        <S.FormLayout>
          <form onSubmit={e => submitHandler(e)}>
            <QuestionTitle setTitleValue={setTitleValue} />
            <QuestionBody setBodyValue={setBodyValue} />
            <S.ButtonLayout>
              <button type="submit">Post your question</button>
              {/* <Link to="#">
                <button>Discard draft</button>
                </Link> */}
            </S.ButtonLayout>
          </form>
        </S.FormLayout>
      </S.QuestionLayout>
    </S.Section>
  );
}

export default AskQuestion;
