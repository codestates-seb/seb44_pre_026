import QuestionBody from "../components/QuestionBody/QuestionBody";
import QuestionNotice from "../components/QuestionNotice/QuestionNotice";
import QuestionTip from "../components/QuestionTip/QuestionTip";
import QuestionTitle from "../components/QuestionTitle/QuestionTitle";
import * as S from "./style";

function AskQuestion() {
  return (
    <S.Section>
      <S.QuestionLayout>
        <QuestionNotice />
        <form>
          <QuestionTitle />
          <QuestionBody />
          <button type="submit">등록</button>
        </form>
        <QuestionTip />
      </S.QuestionLayout>
    </S.Section>
  );
}

export default AskQuestion;
