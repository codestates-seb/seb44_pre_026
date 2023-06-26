import axios from "axios";
import { useState, useEffect } from "react";
import * as S from "./style";
import Bottom from "../../components/MainPage/Bottom/Bottom";
import Top from "../../components/MainPage/Top/Top";
import Question from "../../components/MainPage/Question/Question";
import { BASE_URL } from "../../constants/constants";
import { DetailProps } from "../Detail/Detail";

function Home() {
  const [data, setData] = useState<DetailProps[]>([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/questions?page=1&size=15")
      .then(res => setData(res.data.data));
  }, []);

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
