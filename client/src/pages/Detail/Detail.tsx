import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./style";
import Posting from "../../components/Posting/Posting";

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

  const [askData, setAskData] = useState<DetailProps>(initialState);

  useEffect(() => {
    axios
      .get("http://localhost:5173/src/moks/question.json")
      .then(res => setAskData(res.data));
  }, []);

  console.log(askData);

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
    </S.Section>
  );
}

export default Detail;
