import TextEditor from "../TextEditor/TextEditor";
import QuestionTip from "../QuestionTip/QuestionTip";
import * as S from "./style";

interface BodyProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bodyValue: string;
}

function QuestionBody({ changeHandler, bodyValue }: BodyProps) {
  return (
    <S.Container>
      <S.InputBodyLayout>
        <S.SubHeading>Body</S.SubHeading>
        <S.SubContent>
          The body of your question contains your problem details and results.
          Minimum 220 characters.
        </S.SubContent>
        <TextEditor bodyValue={bodyValue} changeHandler={changeHandler} />
      </S.InputBodyLayout>
      <QuestionTip isTitle={false} />
    </S.Container>
  );
}

export default QuestionBody;
