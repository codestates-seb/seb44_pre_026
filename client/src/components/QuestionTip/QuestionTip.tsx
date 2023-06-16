import * as S from "./style";

function QuestionTip() {
  return (
    <S.Article>
      <S.TipLayout>
        <S.TipTitle>Writing a good title</S.TipTitle>
        <S.TipTextBox>
          <S.TipIcon />
          <S.TipText>
            Your title should summarize the problem.
            <br /> You might find that you have a better idea of your title
            after writing out the rest of the question.
          </S.TipText>
        </S.TipTextBox>
      </S.TipLayout>
    </S.Article>
  );
}

export default QuestionTip;
