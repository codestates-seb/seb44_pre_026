import TextEditor from "../TextEditor/TextEditor";
import * as S from "./style";

interface BodyProps {
  setBodyValue: React.Dispatch<React.SetStateAction<string>>;
}

function QuestionBody({ setBodyValue }: BodyProps) {
  return (
    <S.InputBodyLayout>
      <S.SubHeading>Body</S.SubHeading>
      <S.SubContent>
        The body of your question contains your problem details and results.
        Minimum 220 characters.
      </S.SubContent>
      <TextEditor setBodyValue={setBodyValue} />
    </S.InputBodyLayout>
  );
}

export default QuestionBody;
