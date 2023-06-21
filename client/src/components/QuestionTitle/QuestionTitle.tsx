import * as S from "./style";
import QuestionTip from "../QuestionTip/QuestionTip";

interface TitleProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  titleValue: string;
  focusing: string;
  setFocusing: React.Dispatch<React.SetStateAction<string>>;
}

function QuestionTitle({
  changeHandler,
  titleValue,
  focusing,
  setFocusing,
}: TitleProps) {
  return (
    <>
      <S.Container>
        <S.InputTitleLayout
          onFocus={() => setFocusing("title")}
          onBlur={() => setFocusing("")}
        >
          <S.SubHeading>Title</S.SubHeading>
          <S.SubContent>
            Be specific and imagine you are asking a question to another person
          </S.SubContent>
          <S.InputTitle
            type="text"
            placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
            onChange={changeHandler}
            value={titleValue}
            autoFocus
          />
        </S.InputTitleLayout>
        {focusing === "title" && <QuestionTip isTitle={true} />}
      </S.Container>
    </>
  );
}

export default QuestionTitle;
