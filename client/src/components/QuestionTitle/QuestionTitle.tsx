import * as S from "./style";

function QuestionTitle() {
  return (
    <>
      <S.InputTitleLayout>
        <S.InputTitle>title</S.InputTitle>
        <S.SubContent>
          Be specific and imagine you are asking a question to another person
        </S.SubContent>
        <input
          type="text"
          placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
        />
      </S.InputTitleLayout>
    </>
  );
}

export default QuestionTitle;
