import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Top() {
  // Ask Question 버튼 클릭시 질문 등록 페이지로 이동
  const navigate = useNavigate();
  const goUrl = () => {
    navigate("/questions/ask");
  };

  //newest 버튼 클릭시
  const [tab, setTab] = useState(false);
  function handleClick() {
    setTab(!tab);
  }

  return (
    <S.Top>
      <S.TitleWrapper>
        <S.Title>All Questions</S.Title>
        <S.AskButton onClick={goUrl}>Ask Question</S.AskButton>
      </S.TitleWrapper>

      <S.ButtonWrapper>
        <div className="TagButtons">
          <S.TagButton className="filter">
            <span>Filter</span>
          </S.TagButton>

          <S.TagButton>
            <span>More</span>
          </S.TagButton>
          <S.TagButton>
            <span>Unanswered</span>
          </S.TagButton>
          <S.TagButton>
            <span>Bountied</span>
          </S.TagButton>
          <S.TagButton>
            <span>Active</span>
          </S.TagButton>
          <S.TagButton className={tab ? "active" : ""} onClick={handleClick}>
            <span>Newest</span>
          </S.TagButton>
        </div>
      </S.ButtonWrapper>
    </S.Top>
  );
}

export default Top;
