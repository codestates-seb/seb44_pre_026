import * as S from "./style";

interface TitleProps {
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
}

function QuestionTitle({ setTitleValue }: TitleProps) {
  return (
    <>
      <S.InputTitleLayout>
        <S.SubHeading>Title</S.SubHeading>
        <S.SubContent>
          Be specific and imagine you are asking a question to another person
        </S.SubContent>
        <S.InputTitle
          type="text"
          placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
          onChange={e => setTitleValue(e.target.value)}
        />
      </S.InputTitleLayout>
    </>
  );
}

export default QuestionTitle;
