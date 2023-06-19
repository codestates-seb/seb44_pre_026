import { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import * as S from "./style";
import { Link } from "react-router-dom";
import EditTip from "../../components/EditTip/EditTip";

function QuestionEdit() {
  const [bodyValue, setBodyValue] = useState("");

  return (
    <S.Section>
      <S.EditLayout>
        <S.FormLayout>
          <div>
            <S.TitleBox>
              <S.SubHeading>Title</S.SubHeading>
              <S.InputTitle
                type="text"
                placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
              />
            </S.TitleBox>
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
          </div>
        </S.FormLayout>
        <EditTip />
      </S.EditLayout>
    </S.Section>
  );
}

export default QuestionEdit;
