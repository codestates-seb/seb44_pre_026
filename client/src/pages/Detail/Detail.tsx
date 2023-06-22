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
  name: string;
  createdAt: string;
  modifiedAt: string;
  isAsk: boolean;
}
export interface DetailProps {
  memberId: string;
  questionId: number;
  title: string;
  content: string;
  name: string;
  createdAt: string;
  modifiedAt: string;
}

function Detail() {
  const initialState: DetailProps = {
    memberId: "",
    questionId: 0,
    title: "",
    content: "",
    name: "",
    createdAt: "",
    modifiedAt: "",
  };

  const [answerData, setAnswerData] = useState<AnswerProps[]>([]);
  const [askData, setAskData] = useState<DetailProps>(initialState);
  const [complete, setComplete] = useState(false);

  const { id } = useParams();

  const fetch = async () => {
    const response = await axios.get(`/api/questions/${id}`);
    setAskData(response?.data.data);
    setComplete(false);
  };

  useEffect(() => {
    axios.get("/api/answers").then(res => setAnswerData(res.data.data));

    fetch();
  }, [complete]);

  console.log("answerData = ", answerData);
  console.log("askData = ", askData);

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
        <Posting content={askData} isAsk={true} setComplete={setComplete} />
      </S.DetailLayout>
      {answerData.length > 0 && (
        <Answer answerData={answerData} setComplete={setComplete} />
      )}
    </S.Section>
  );
}

export default Detail;
