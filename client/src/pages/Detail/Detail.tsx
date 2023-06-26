import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./style";
import Posting from "../../components/Posting/Posting";
import Answer from "../../components/Answer/Answer";
import { useParams } from "react-router-dom";
import { ACCESS_TOKEN, BASE_URL } from "../../constants/constants";

export interface AnswerProps {
  memberId: string;
  questionId: number;
  answerId: string;
  content: string;
  nickName: string;
  createdAt: string;
  modifiedAt: string;
  isAsk: boolean;
}
export interface DetailProps {
  memberId: string;
  questionId: number;
  title: string;
  content: string;
  nickName: string;
  createdAt: string;
  modifiedAt: string;
  answers: AnswerProps[];
}

function Detail() {
  const initialState: DetailProps = {
    memberId: "",
    questionId: 0,
    title: "",
    content: "",
    nickName: "",
    createdAt: "",
    modifiedAt: "",
    answers: [],
  };

  // const [answerData, setAnswerData] = useState<AnswerProps[]>([]);
  const [askData, setAskData] = useState<DetailProps>(initialState);
  const [complete, setComplete] = useState(false);

  const { id } = useParams();
  const token = localStorage.getItem(ACCESS_TOKEN);

  useEffect(() => {
    axios
      .get(BASE_URL + `/questions/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => setAskData(res.data.data));
    setComplete(false);
  }, [complete]);

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
      <Answer answerData={askData.answers} setComplete={setComplete} />
    </S.Section>
  );
}

export default Detail;
