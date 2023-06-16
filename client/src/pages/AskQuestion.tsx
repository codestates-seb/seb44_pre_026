import QuestionNotice from "../components/QuestionNotice/QuestionNotice";
import QuestionTip from "../components/QuestionTip/QuestionTip";
import * as S from "./style";

function AskQuestion() {
  return (
    <S.Section>
      <S.QuestionLayout>
        <QuestionNotice />
        <QuestionTip />
      </S.QuestionLayout>
    </S.Section>
  );
}

export default AskQuestion;
