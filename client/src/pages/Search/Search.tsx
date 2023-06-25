import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./style";
import Top from "../../components/Search/Top/top";
import Question from "../../components/Search/Question/Question";
import Bottom from "../../components/Search/Bottom/Bottom";

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

function Search() {
  const [data, setData] = useState<QuestionsProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5173/src/moks/questions.json")
      .then((res) => setData(res.data));
  });

  return (
    <S.Search>
      <S.Content>
        <Top />
        <Question questions={data} />
        <Bottom />
      </S.Content>
    </S.Search>
  );
}

export default Search;
