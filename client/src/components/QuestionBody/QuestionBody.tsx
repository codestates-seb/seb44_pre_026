import TextEditor from "../TextEditor/TextEditor";
import QuestionTip from "../QuestionTip/QuestionTip";
import * as S from "./style";

interface BodyProps {
  bodyValue: string;
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

function QuestionBody({ bodyValue, setBodyValue }: BodyProps) {
  return (
    <S.Container>
      <S.InputBodyLayout>
        <S.SubHeading>Body</S.SubHeading>
        <S.SubContent>
          The body of your question contains your problem details and results.
          Minimum 220 characters.
        </S.SubContent>
        <TextEditor bodyValue={bodyValue} setBodyValue={setBodyValue} />
      </S.InputBodyLayout>
      <QuestionTip isTitle={false} />
    </S.Container>
  );
}

export default QuestionBody;
