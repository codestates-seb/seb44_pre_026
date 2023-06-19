import * as S from "./style";

interface TipProps {
  isTitle: boolean;
}

function QuestionTip({ isTitle }: TipProps) {
  const titleTip = {
    title: "Writing a good title",
    text:
      "Your title should summarize the problem." +
      "\n\n" +
      "You might find that you have a better idea of your title after writing out the rest of the question.",
  };

  const bodyTip = {
    title: "Introduce the problem",
    text: "Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.",
  };

  return (
    <S.Article>
      <S.TipLayout>
        <S.TipTitle>{isTitle ? titleTip.title : bodyTip.title}</S.TipTitle>
        <S.TipTextBox>
          <S.TipIcon />
          <S.TipText>{isTitle ? titleTip.text : bodyTip.text}</S.TipText>
        </S.TipTextBox>
      </S.TipLayout>
    </S.Article>
  );
}

export default QuestionTip;
