import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./style";
import Posting from "../../components/Posting/Posting";
import Answer from "../../components/Answer/Answer";
import { useParams } from "react-router-dom";

export interface AnswerProps {
  memberId: string;
  questionId: number;
  answerId: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  isAsk: boolean;
}
export interface DetailProps {
  memberId: string;
  questionId: number;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
}

function Detail() {
  const initialState: DetailProps = {
    memberId: "",
    questionId: 0,
    title: "",
    content: "",
    createdAt: "",
    modifiedAt: "",
  };

  const [answerData, setAnswerData] = useState<AnswerProps[]>([]);
  const [askData, setAskData] = useState<DetailProps>(initialState);

  const { id } = useParams();
  console.log(id);

  const fetch = async () => {
    const response = await axios.get(`/api/questions/${id}`);
    setAskData(response?.data.data);
  };

  useEffect(() => {
    axios.get("/api/answers").then(res => setAnswerData(res.data.data));

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
            <span>{askData.createdAt}</span>
          </S.DetailInfo>
          <S.DetailInfo>
            <span>Modified</span>
            <span>{askData.modifiedAt}</span>
          </S.DetailInfo>
        </S.DetailInfoBox>
      </S.Header>
      <S.DetailLayout>
        <img
          src="https://tpc.googlesyndication.com/simgad/13962158573275624079"
          style={{ width: "850px", height: "90px" }}
        />
        <Posting content={askData} isAsk={true} />
      </S.DetailLayout>
      {answerData.length > 0 && <Answer answerData={answerData} />}
    </S.Section>
  );
}

export default Detail;
