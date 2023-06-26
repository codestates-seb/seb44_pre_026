import * as S from "./style";
import Top from "../../components/Search/Top/top";
import Question from "../../components/Search/Question/Question";
import Bottom from "../../components/Search/Bottom/Bottom";
import { QuestionsProps } from "../Home/Home";

interface Props {
  data: QuestionsProps[];
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
