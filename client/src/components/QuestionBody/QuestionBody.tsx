import TextEditor from "../TextEditor/TextEditor";
import QuestionTip from "../QuestionTip/QuestionTip";
import * as S from "./style";

interface BodyProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bodyValue: string;
  focusing: string;
  setFocusing: React.Dispatch<React.SetStateAction<string>>;
}

function QuestionBody({
  changeHandler,
  bodyValue,
  focusing,
  setFocusing,
}: BodyProps) {
  return (
    <S.Container>
      <S.InputBodyLayout
        onFocus={() => setFocusing("body")}
        onBlur={() => setFocusing("")}
      >
        <S.SubHeading>Body</S.SubHeading>
        <S.SubContent>
          The body of your question contains your problem details and results.
          Minimum 220 characters.
        </S.SubContent>
        <TextEditor bodyValue={bodyValue} changeHandler={changeHandler} />
      </S.InputBodyLayout>
      {focusing === "body" && <QuestionTip isTitle={false} />}
    </S.Container>
  );
}

export default QuestionBody;
