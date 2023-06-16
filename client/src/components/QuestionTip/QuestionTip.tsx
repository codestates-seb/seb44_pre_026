import * as S from "./style";

interface TipProps {
  TipTitle: string;
  TipText: string;
}

function QuestionTip({ TipTitle, TipText }: TipProps) {
  return (
    <S.Article>
      <S.TipLayout>
        <S.TipTitle>{TipTitle}</S.TipTitle>
        <S.TipTextBox>
          <S.TipIcon />
          <S.TipText>{TipText}</S.TipText>
        </S.TipTextBox>
      </S.TipLayout>
    </S.Article>
  );
}

export default QuestionTip;
