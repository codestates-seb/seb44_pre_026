import Posting from "../Posting/Posting";
import { AnswerProps } from "../../pages/Detail/Detail";
import * as S from "./style";
import TextEditor from "../TextEditor/TextEditor";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ACCESS_TOKEN, BASE_URL } from "../../constants/constants";

interface Props {
  answerData: AnswerProps[];
  setComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

function Answer({ answerData, setComplete }: Props) {
  const [bodyValue, changeBodyHandler, resetBody] = useInput("");

  const { id } = useParams();
  const token = localStorage.getItem(ACCESS_TOKEN);

  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post(
      BASE_URL + `/answers/${id}`,
      {
        content: bodyValue,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    navigate(`/questions/${id}`);
    setComplete(true);

    resetBody();
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
        {answerData.length > 0 &&
          answerData.map(e => (
            <Posting
              key={e.answerId}
              content={e}
              isAsk={false}
              answerId={e.answerId}
              setComplete={setComplete}
            />
          ))}
      </S.AnswerLayout>
      <S.FormLayout>
        <S.FormBox onSubmit={e => submitHandler(e)}>
          <div>Your Answer</div>
          <TextEditor bodyValue={bodyValue} changeHandler={changeBodyHandler} />
          <S.ButtonLayout>
            <button type="submit">Post your answer</button>
          </S.ButtonLayout>
        </S.FormBox>
      </S.FormLayout>
    </>
  );
}

export default Answer;
