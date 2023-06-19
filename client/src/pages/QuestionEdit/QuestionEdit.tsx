import { useState } from "react";
import TextEditor from "../../components/TextEditor/TextEditor";
import * as S from "./style";
import { Link } from "react-router-dom";
import EditTip from "../../components/EditTip/EditTip";

function QuestionEdit() {
  const [titleValue, setTitleValue] = useState<string>("");
  const [bodyValue, setBodyValue] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("titleValue = ", titleValue);
    console.log("bodyValue = ", bodyValue);
    setTitleValue("");
    setBodyValue("");
  };

  return (
    <S.Section>
      <S.EditLayout>
        <S.FormLayout onSubmit={e => submitHandler(e)}>
          <div>
            <S.TitleBox>
              <S.SubHeading>Title</S.SubHeading>
              <S.InputTitle
                type="text"
                placeholder="e.g. Is ther R function for finding the index of an element in a vector?"
                value={titleValue}
                onChange={e => setTitleValue(e.target.value)}
              />
            </S.TitleBox>
            <div>
              <S.SubHeading>Body</S.SubHeading>
              <TextEditor bodyValue={bodyValue} setBodyValue={setBodyValue} />
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
