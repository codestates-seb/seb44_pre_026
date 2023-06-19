import Posting from "../Posting/Posting";
import { AnswerProps } from "../../pages/Detail/Detail";
import * as S from "./style";
import TextEditor from "../TextEditor/TextEditor";
import { useState } from "react";

interface Props {
  answerData: AnswerProps[];
}

function Answer({ answerData }: Props) {
  const [bodyValue, setBodyValue] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("bodyValue = ", bodyValue);
  };
  return (
    <>
      <S.AnswerLayout>
        <S.Header>
          <div>{answerData.length} Answer</div>
          <S.SortMenu>
            <label htmlFor="sort_answer">Sorted by: </label>
            <select name="sort" id="sort_answer" defaultValue="score">
              <option value="score">Highest Score (default)</option>
              <option value="trend">Trending (recent votes count more)</option>
              <option value="modified">Date modified (newest first)</option>
              <option value="created">Date created (oldest first)</option>
            </select>
          </S.SortMenu>
        </S.Header>
        {answerData.map(e => (
          <Posting key={e.answer_id} content={e} isAsk={false} />
        ))}
      </S.AnswerLayout>
      <S.FormLayout>
        <S.FormBox onSubmit={e => submitHandler(e)}>
          <div>Your Answer</div>
          <TextEditor setBodyValue={setBodyValue} />
          <S.ButtonLayout>
            <button type="submit">Post your answer</button>
          </S.ButtonLayout>
        </S.FormBox>
      </S.FormLayout>
    </>
  );
}

export default Answer;
