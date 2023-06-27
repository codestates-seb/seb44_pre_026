import * as S from "./style";

function QuestionNotice() {
  return (
    <>
      <S.QuestionNotice>
        <S.SubHeading>Writing a good question</S.SubHeading>
        <S.SubContent>
          You’re ready to ask a programming-related question and this form will
          help guide you through the process.
          <br /> Looking to ask a non-programming question? See the topics here
          to find a relevant site.
        </S.SubContent>
        <S.SubStep>Steps</S.SubStep>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community.
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </S.QuestionNotice>
    </>
  );
}

export default QuestionNotice;
