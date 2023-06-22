import TextEditor from "../../components/TextEditor/TextEditor";
import * as S from "./style";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditTip from "../../components/EditTip/EditTip";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useState, useEffect } from "react";

// TODO: initial, useEffect 부분 리팩토링 필요

function QuestionEdit() {
  const [initialTitle, setInitialTitle] = useState("");
  const [initialBody, setInitialBody] = useState("");
  const [titleValue, changeTitleHandler, titleReset] = useInput(initialTitle);
  const [bodyValue, changeBodyHandler, bodyReset] = useInput(initialBody);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`/api/questions/${id}`).then(res => {
      setInitialTitle(res.data.data.title);
      setInitialBody(res.data.data.content);
      titleReset();
      bodyReset();
    });
  }, [initialTitle, initialBody]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.patch(`/api/questions/${id}`, {
      title: titleValue,
      content: bodyValue,
      memberId: 1,
    });

    navigate(`/questions/${id}`);
  };

  console.log("QuestionEdit bodyValue = ", bodyValue);

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
                onChange={changeTitleHandler}
                autoFocus
              />
            </S.TitleBox>
            <div>
              <S.SubHeading>Body</S.SubHeading>
              <TextEditor
                bodyValue={bodyValue}
                changeHandler={changeBodyHandler}
              />
              <S.Viewer
                dangerouslySetInnerHTML={{
                  __html: bodyValue,
                }}
              />
            </div>
            <S.ButtonLayout>
              <button>Save edits</button>
              <Link to={`/questions/${id}`}>
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
