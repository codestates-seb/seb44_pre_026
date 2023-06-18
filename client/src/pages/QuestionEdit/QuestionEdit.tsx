import { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import * as S from "./style";
import { Link } from "react-router-dom";

function QuestionEdit() {
  const [bodyValue, setBodyValue] = useState("");

  return (
    <S.Section>
      <S.EditLayout>
        <S.FormLayout>
          <div>
            <S.SubHeading>Title</S.SubHeading>
            <S.InputTitle
              type="text"
              placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
            />
          </div>
          <div>
            <S.SubHeading>Body</S.SubHeading>
            <TextEditor setBodyValue={setBodyValue} />
            <S.Viewer
              dangerouslySetInnerHTML={{
                __html: bodyValue,
              }}
            />
          </div>
          <S.ButtonLayout>
            <button>Save edits</button>
            <Link to="/questions">
              <button>Cancel</button>
            </Link>
          </S.ButtonLayout>
        </S.FormLayout>
        <S.EditTip>
          <div>
            <S.TipHeader>How to Edit</S.TipHeader>
            <ul>
              <li>Correct minor typos or mistakes</li>
              <li>Clarify meaning without changing it</li>
              <li>Add related resources or links</li>
              <li>Always respect the author's intent</li>
              <li>Don't use edits to reply the author</li>
            </ul>
          </div>
        </S.EditTip>
      </S.EditLayout>
    </S.Section>
  );
}

export default QuestionEdit;
