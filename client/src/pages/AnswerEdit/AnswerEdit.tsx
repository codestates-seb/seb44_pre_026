import { Link, useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailProps } from "../Detail/Detail";
import TextEditor from "../../components/TextEditor/TextEditor";
import EditTip from "../../components/EditTip/EditTip";
import useInput from "../../hooks/useInput";
import { ACCESS_TOKEN, BASE_URL } from "../../constants/constants";

function AnswerEdit() {
  const [question, setQuestion] = useState<DetailProps>({
    memberId: "",
    questionId: 0,
    title: "",
    content: "",
    nickName: "",
    createdAt: "",
    modifiedAt: "",
    answers: [],
  });

  const [initialBody, setInitialBody] = useState("");
  const [bodyValue, changeBodyHandler, bodyReset] = useInput(initialBody);

  const { qid, id } = useParams();
  const token = localStorage.getItem(ACCESS_TOKEN);

  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.patch(
      BASE_URL + `/answers/${id}`,
      {
        content: bodyValue,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    navigate(`/questions/${qid}`);
  };

  const fetch = async () => {
    const response = await axios.get(BASE_URL + `/questions/${qid}`, {
      headers: {
        Authorization: token,
      },
    });
    setQuestion(response?.data.data);
  };

  useEffect(() => {
    axios
      .get(BASE_URL + `/answers/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
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
              <Link to={`/questions/${qid}`}>
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
