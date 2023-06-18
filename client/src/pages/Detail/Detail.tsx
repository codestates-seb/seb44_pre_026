import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./style";
import Posting from "../../components/Posting/Posting";
import Answer from "../../components/Answer/Answer";

export interface AnswerProps {
  username: string;
  question_id: number;
  answer_id: string;
  content: string;
  created_at: string;
  modified_at: string;
}
export interface DetailProps {
  username: string;
  question_id: number;
  title: string;
  content: string;
  created_at: string;
  modified_at: string;
}

function Detail() {
  const initialState: DetailProps = {
    username: "",
    question_id: 0,
    title: "",
    content: "",
    created_at: "",
    modified_at: "",
  };

  const [answerData, setAnswerData] = useState<AnswerProps[]>([]);
  const [askData, setAskData] = useState<DetailProps>(initialState);

  const fetch = async () => {
    const response = await axios.get(
      "http://localhost:5173/src/moks/question.json"
    );
    setAskData(response?.data);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5173/src/moks/answer.json")
      .then(res => setAnswerData(res.data));

    fetch();
  }, []);

  console.log(askData);
  console.log(answerData);

  return (
    <S.Section>
      <S.Header>
        <div>
          <S.DetailTitle>{askData.title}</S.DetailTitle>
        </div>
        <S.DetailInfoBox>
          <S.DetailInfo>
            <span>Asked</span>
            <span>{askData.created_at}</span>
          </S.DetailInfo>
          <S.DetailInfo>
            <span>Modified</span>
            <span>{askData.modified_at}</span>
          </S.DetailInfo>
        </S.DetailInfoBox>
      </S.Header>
      <S.DetailLayout>
        <img
          src="https://tpc.googlesyndication.com/simgad/13962158573275624079"
          style={{ width: "850px", height: "90px" }}
        />
        <Posting content={askData} />
      </S.DetailLayout>
      {answerData.length > 0 && <Answer answerData={answerData} />}
    </S.Section>
  );
}

export default Detail;
