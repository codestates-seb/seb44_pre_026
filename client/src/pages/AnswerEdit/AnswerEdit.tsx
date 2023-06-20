import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { AnswerProps, DetailProps } from "../Detail/Detail";
import TextEditor from "../../components/TextEditor/TextEditor";
import EditTip from "../../components/EditTip/EditTip";
import useInput from "../../hooks/useInput";

function AnswerEdit() {
  const [question, setQuestion] = useState<DetailProps>({
    memberId: "",
    questionId: 0,
    title: "",
    content: "",
    createdAt: "",
    modifiedAt: "",
  });

  const [initialBody, setInitialBody] = useState("");
  const [bodyValue, changeBodyHandler, bodyReset] = useInput(initialBody);

  const { qid, id } = useParams();
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.patch(`/api/answers/${id}`, {
      content: bodyValue,
    });

    navigate(-1);
  };

  const fetch = async () => {
    const response = await axios.get(`/api/questions/${qid}`);
    setQuestion(response?.data.data);
  };

  useEffect(() => {
    axios.get(`/api/answers/${id}`).then(res => {
      setInitialBody(res.data.data.content);
      bodyReset();
      fetch();
    });

    fetch();
  }, [initialBody]);

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
            <TextEditor
              bodyValue={bodyValue}
              changeHandler={changeBodyHandler}
            />
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
