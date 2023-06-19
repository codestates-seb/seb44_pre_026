import TextEditor from "../TextEditor/TextEditor";
import QuestionTip from "../QuestionTip/QuestionTip";
import * as S from "./style";

interface BodyProps {
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

function QuestionBody({ setBodyValue }: BodyProps) {
  const TipTitle = "Introduce the problem";
  const TipText =
    "Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented you from solving it yourself.";

  return (
    <S.Container>
      <S.InputBodyLayout>
        <S.SubHeading>Body</S.SubHeading>
        <S.SubContent>
          The body of your question contains your problem details and results.
          Minimum 220 characters.
        </S.SubContent>
        <TextEditor setBodyValue={setBodyValue} />
      </S.InputBodyLayout>
      <QuestionTip TipTitle={TipTitle} TipText={TipText} />
    </S.Container>
  );
}

export default QuestionBody;
