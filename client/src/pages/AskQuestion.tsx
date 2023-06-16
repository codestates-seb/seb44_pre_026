import QuestionBody from "../components/QuestionBody/QuestionBody";
import QuestionNotice from "../components/QuestionNotice/QuestionNotice";
import QuestionTip from "../components/QuestionTip/QuestionTip";
import QuestionTitle from "../components/QuestionTitle/QuestionTitle";

import * as S from "./style";
import { useState } from "react";

function AskQuestion() {
  const [titleValue, setTitleValue] = useState<string>("");
  const [bodyValue, setBodyValue] = useState<string>("");

  const submitHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("titleValue = ", titleValue);
    console.log("bodyValue = ", bodyValue);
  };

  return (
    <S.Section>
      <S.QuestionLayout>
        <QuestionNotice />
        <form onSubmit={e => submitHandler(e)}>
          <QuestionTitle setTitleValue={setTitleValue} />
          <QuestionBody setBodyValue={setBodyValue} />
          <div>
            <button type="submit">Post your question</button>
            {/* <Link to="#">
              <button>Discard draft</button>
            </Link> */}
          </div>
        </form>
        <QuestionTip />
      </S.QuestionLayout>
    </S.Section>
  );
}

export default AskQuestion;
