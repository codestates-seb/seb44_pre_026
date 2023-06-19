import { Link } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailProps } from "../Detail/Detail";
import TextEditor from "../../components/TextEditor/TextEditor";
import EditTip from "../../components/EditTip/EditTip";

function AnswerEdit() {
  const [question, setQuestion] = useState<DetailProps>({
    username: "",
    question_id: 0,
    title: "",
    content: "",
    created_at: "",
    modified_at: "",
  });

  const [bodyValue, setBodyValue] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("bodyValue = ", bodyValue);
    setBodyValue("");
  };

  useEffect(() => {
    axios
      .get("http://localhost:5173/src/moks/question.json")
      .then(res => setQuestion(res.data));
  }, []);

  return (
    <S.Section>
      <S.EditLayout>
        <S.FormLayout onSubmit={e => submitHandler(e)}>
          <div>
            <h2>{question.title}</h2>
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: question.content,
                }}
              />
              <S.Grippie></S.Grippie>
            </div>
            <S.SubHeading>Answer</S.SubHeading>
            <TextEditor bodyValue={bodyValue} setBodyValue={setBodyValue} />
            <S.Viewer
              dangerouslySetInnerHTML={{
                __html: bodyValue,
              }}
            />
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

export default AnswerEdit;
