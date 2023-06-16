import * as S from "./style";
import QuestionTip from "../QuestionTip/QuestionTip";

interface TitleProps {
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
}

const TipTitle = "Writing a good title";
const TipText =
  "Your title should summarize the problem." +
  "\n\n" +
  "You might find that you have a better idea of your title after writing out the rest of the question.";

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
        <QuestionTip TipTitle={TipTitle} TipText={TipText} />
      </S.Container>
    </>
  );
}

export default QuestionTitle;
