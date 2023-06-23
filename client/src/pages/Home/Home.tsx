import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./style";
import Bottom from "../../components/MainPage/Bottom/Bottom";
import Top from "../../components/MainPage/Top/Top";
import Question from "../../components/MainPage/Question/Question";

export interface QuestionsProps {
  memberId: string;
  questionId: number;
  answerId: string;
  title: string;
  content: string;
  name: string;
  createdAt: string;
  modifiedAt: string;
}

function Home() {
  const [data, setData] = useState<QuestionsProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5173/src/moks/questions.json")
      .then((res) => setData(res.data));
  });

  return (
    <S.Home>
      <S.Content>
        <Top />
        <Question questions={data} />
        <Bottom />
      </S.Content>
    </S.Home>
  );
}

export default Home;
