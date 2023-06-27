import * as S from "./style";
import Top from "../../components/Search/Top/top";
import Question from "../../components/MainPage/Question/Question";
import Bottom from "../../components/Search/Bottom/Bottom";
import { DetailProps } from "../Detail/Detail";

interface Props {
  data: DetailProps[];
}

function Search({ data }: Props) {
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
