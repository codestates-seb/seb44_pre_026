import * as S from "./style";
import QuestionTip from "../QuestionTip/QuestionTip";

interface TitleProps {
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
}

function QuestionTitle({ setTitleValue }: TitleProps) {
  return (
    <>
      <S.Container>
        <S.InputTitleLayout>
          <S.SubHeading>Title</S.SubHeading>
          <S.SubContent>
            Be specific and imagine you are asking a question to another person
          </S.SubContent>
          <S.InputTitle
            type="text"
            placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
            onChange={e => setTitleValue(e.target.value)}
            autoFocus
          />
        </S.InputTitleLayout>
        <QuestionTip isTitle={true} />
      </S.Container>
    </>
  );
}

export default QuestionTitle;
