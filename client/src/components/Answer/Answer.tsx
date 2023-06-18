import Posting from "../Posting/Posting";
import { AnswerProps } from "../../pages/Detail/Detail";
import * as S from "./style";

interface Props {
  answerData: AnswerProps[];
}

function Answer({ answerData }: Props) {
  return (
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
        <Posting key={e.answer_id} answer={e} />
      ))}
    </S.AnswerLayout>
  );
}

export default Answer;
