import * as S from "./style";
import { QuestionsProps } from "../../../pages/Home/Home";
import { Link } from "react-router-dom";
import { ACCESS_TOKEN } from "../../../constants/constants";

interface Props {
  questions: QuestionsProps[];
}

function Question({ questions }: Props) {
  const token = localStorage.getItem(ACCESS_TOKEN);

  return (
    <S.Question>
      <S.ContentWrapper className="contentWrapper">
        {questions.map(e => (
          <>
            <S.Answers key={e.questionId} className="answer">
              {/* 답변수 */}
              <div>answers</div>
            </S.Answers>

            <S.QuestionInfo className="questionInfo">
              <div>
                <Link
                  to={token ? `/questions/${e.questionId}` : "/login"}
                  className="title"
                >
                  {e.title}
                </Link>
              </div>
              <button className="tag">태그</button>
              <div className="info">
                <span className="createdAt">{e.createdAt}</span>
                <span className="nickname">{e.name}</span>
              </div>
            </S.QuestionInfo>
          </>
        ))}
      </S.ContentWrapper>
    </S.Question>
  );
}

export default Question;
